import { useState } from "react"
import { Link } from "react-router-dom";

const Signup = () => {
    const [formDat,setFormData]=useState({
        name:'',
        email:'',
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
        const res=await fetch("http://localhost:8080/user",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:formDat.name,
                email:formDat.email,
                password:formDat.password
            })
        });
        if(res.ok){
            alert("sucess");
            setFormData({
                name:'',
                password:'',
                email:''
            })
        }
    }
  return (
    <div className="flex flex-col justify-center items-center min-h-full h-screen ">
    <form
        onSubmit={handleSubmit} 
       className="flex flex-col bg-blue-400 p-6 rounded-3xl shadow-md w-96 h-1/2 space-y-2">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">SignUp</h1>
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
        <label className="text-sm font-bold text-white">Email</label>
        <input
          type="text"
          name="email"
          value={formDat.email}
          onChange={handleChange}
          className="px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
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
        value="REGISTER"
        className="py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer"
      />

      <h3 className='text-white font-bold ml-5'>Have an Account yet! <Link to='/log' className='underline hover:text-blue-800'>Login here</Link></h3>
    </form>
  </div>
  )
}

export default Signup