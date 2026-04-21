"use client"

import { useState } from "react"
import Link from "next/link";
import { register } from "@/lib/auth";
export default function Register () {
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const handelRegister = (e) => {
            e.preventDefault();

            let newErrors = {};

            
            if (!username.trim()) {
                newErrors.name = "Username is required";
            }

            if (!email.trim()) {
                newErrors.email = "Email is required";
            }

            if (!password.trim()) {
                newErrors.password = "Password is required";
            }

           
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            
            const result = register({
                name: username,
                email,
                password,
                role: "user", 
            });

            
            if (!result.success) {
                setErrors({ email: result.message });
                return;
            }

            
            setErrors({});
            alert("Registered successfully!");

            
            setUsername("");
            setEmail("");
            setPassword("");

            // Optional: redirect (later you can use router)
            // router.push("/login");
            };
    return(
        <div className="flex justify-center items-center h-screen bg-gray-400">
            <form 
            onSubmit={handelRegister}
            className="border rounded-2xl p-10 w-100 bg-blue-200">
                <h2 className="text-center text-2xl font-semibold underline mb-3">Register</h2>
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-sm font-semibold">
                            Username
                    </label>
                    <input 
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    className="border rounded-xl bg-gray-300 p-2 mt-2"/>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <label htmlFor="email" className="text-sm font-semibold mt-2">
                            Email
                    </label>
                    <input 
                    type="text" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="border rounded-xl bg-gray-300 p-2 mt-2"/>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <label htmlFor="password" className="text-sm font-semibold mt-2">
                            Password
                    </label>
                    <input 
                    type="password" 
                    placeholder="Enter password"
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="border rounded-xl bg-gray-300 p-2 mt-2"/>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="flex justify-center mt-6">
                    <button
                    type="submit"
                    className="px-6 py-3 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
                    Register
                </button>
            </div>
                <div className="flex items-center justify-center mt-5">
                <p className="text-sm font-semibold items-center">Already have an account <Link href={"/login"} className="text-blue-500 underline">Login</Link> instead </p>
            </div>
            </form>
        </div>
    )
}