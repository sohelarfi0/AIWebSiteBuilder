import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./config/db.js";

const app = express();


connectToDatabase()
// Build allowed origins from ORIGIN env var, fallback to Vite default
const allowedOrigins = process.env.ORIGIN
    ? process.env.ORIGIN.split(",").map(s => s.trim()).filter(Boolean)
    : ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser())
app.use(express.json())


app.get("/",(req, res)=> res.send("Server is Live!"))

// Centralized Error Handling Middleware
app.use((err,_req,res,_next)=>{
    console.error(`[Error] ${err.message}`);
    res.status(500).json({error:err.message})
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)

})