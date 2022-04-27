import React, { useState } from "react";
import axios from "axios";

export default function Login({
  image,
  apiLogin
}){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      
    const onSubmit = (e) => {
      e.preventDefault()
  
      if(!email){
        alert("El email es requerido")
        return;
      }
  
      if(!password && password.length < 6 ){
        alert("El password es requerido o debe ser mayor a 6 caracteres")
        return;
      }
  
      axiosAPI.post(apiLogin, {
        user: {
          email,
          password
        }
      })
        .then(({data}) => {
          window.location.href = data.redirect 
        })
        .catch(res => {
          console.dir(res);
          alert(res.response.data.message)
        })
      }
    return(
      <div className="max-w-2xl mx-auto relative mt-20">
        <img src={ image} className="absolute inset-0 z-0" />
        <div className="w-full h-full relative z-10 p-5">
          <h1 className="mb-4 text-5xl font-semibold text-black text-center">
            GAMMERS
          </h1>
          <form className="w-full" onSubmit={onSubmit}>
            <label className="text-2xl">Email:</label>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email"
              className=" w-full inline-block p-2 text-primary border rounded-md hover:bg-gray-200 focus:border-green-400 outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
            <label className=" text-2xl">Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 text-primary border rounded-md hover:bg-gray-200 focus:border-green-400 outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-blue-500 hover:bg-blue-300 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <a href="/users/sign_up" className="text-blue-600 hover:underline">
              Need to register? Sign up for free
            </a>
          </div>
        </div>

      </div>
    );
  };
