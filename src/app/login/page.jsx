"use client"

import { useState } from "react"
import Link
 from "next/link"
export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const handleLogin = () => {
        alert("Login Successfully")
    }
    return(

        <div className="flex justify-center items-center h-screen bg-gray-400">
            <form 
            onSubmit={handleLogin}
            className="border rounded-2xl p-10 w-100 bg-blue-200">
                <h2 className="text-center text-2xl font-semibold underline mb-3">Login</h2>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold mt-2">Email</label>

                    <input 
                    type="text" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="border rounded-xl bg-gray-300 p-2 mt-2"/>
                     
                     {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <label htmlFor="password" className="text-sm font-semibold mt-2">Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter password"
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="border rounded-xl bg-gray-300 p-2 mt-2"/>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <div className="flex justify-center mt-6">
                <button type="submit"
                    className="px-6 py-3 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
                    Login
                </button>
                </div>
            <div className="flex items-center justify-center mt-5">
                <p className="text-sm font-semibold items-center">Dont have an account please <Link href={"/register"} className="text-blue-500 underline">Register</Link> first </p>
            </div>
            </form>
        </div>
    )
}