import mongoose from "mongoose";

export async function connectToDatabase(){
    if(!process.env.MONGODB_URI){
        console.error("MONGODB_URI is not set. Set it in your .env or environment before starting the server.");
        return;
    }

    mongoose.connection.on('connected', ()=>{
        console.log("Successfully connected to MongoDB")
    })

    mongoose.connection.on('error', (err)=>{
        console.error("MongoDB connection error:", err.message || err);
    })

    try{
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }catch(err){
        console.error("Failed to connect to MongoDB:", err.message || err);
        console.error("Verify MONGODB_URI, credentials, network access, and Atlas IP whitelist (if using Atlas).");
        // Do not exit the process; allow the server to run for local dev even if DB auth fails.
        return;
    }
}