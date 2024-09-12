import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const nav=useNavigate();
    const [formDat,setFormData]=useState({
        name:'',
        password:''
    });
    function handleChange(e){
        setFormData({
            ...formDat,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const res=await fetch('http://localhost:8080/user/log',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                    name:formDat.name,
                    password:formDat.password
            })
        });
        if(res.ok){
            console.log("Done");
            alert("Sucess");
            setFormData({
                name:'',
                password:''
            });
            const data=await res.json();
            localStorage.setItem('token',data.token);  
            nav("/home");
        }
        else{
            alert("Not sucess");
        }
    }
  return (
    <div className="flex flex-col justify-center items-center min-h-full h-screen space-y-4">
      <h1 className='text-3xl font-bold'>REMINDERS APP</h1>
    <form
        onSubmit={handleSubmit} 
       className="flex flex-col bg-blue-400 p-6 rounded-3xl shadow-md w-96 h-1/2 space-y-4">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">Login</h1>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-white">Username</label>
        <input
          type="text"
          name="name"
          value={formDat.name}
          onChange={handleChange}
          className="px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-bold text-white">Password</label>
        <input
          type="password"
          name="password"
          value={formDat.password}
          onChange={handleChange}
          className="px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <input
        type="submit"
        value="LOGIN"
        className="py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer"
      />

      <h3 className='text-white font-bold ml-5'>Don't have an Account yet! <Link to='/register' className='underline hover:text-blue-800'>Create here</Link></h3>
    </form>
  </div>
  )
}

export default Login