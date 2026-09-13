import React from 'react'
import LoginLeft from '../components/LoginLeft'

const AuthPage = () => {
    cont [error, setError] = useState(null);
    cont [loading, setLoading] = useState(false);

    const isLogin =  mode === "login";

  return (
    <div className="min-h-screen bg-white flex text-zinc-900 font-sans">
        {/* left panel - branding */}
        <LoginLeft/>

        {/* right panel - form */}
        <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-sm">

                <div className="mb-10">
                    <h1 className="text-3xl font-medium tracking-tight text-zinc-900 mb-1.5
                    font-sans">{isLogin ? "Sign in" : "Create an account"}</h1>

                    <p className='text-sm text-zinc-400'>
                        {isLogin ? "Enter your credentials to access your website builder." :
                         "Get started by entering your registration details."}

                    </p>
                </div>
                {error && <div className="mb-6 p-3 border border-red-200 
                bg-red-50text-red-700 text-xs rounded">{error}</div>}

                <form action="">
                
                </form>

            


            </div>
        </div>

    </div>
  )
}

export default AuthPage