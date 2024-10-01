import React from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, SetUsername] = React.useState("");
    const [email, Setemail] = React.useState("");
    const [password, Setpassword] = React.useState("");
    const [password_confirm, Setpassword_confirm] = React.useState("");
    const [phone, Setphone] = React.useState("");
    
    const Submit = async(e)=>{
        e.preventDefault()
        try{
            let response  = await axios.post("https://backend.bhandarishishir.com.np/api/register/user/", {
                username,
                email,
                password,
                password_confirm,
                phone
            })
           
            if(response.status == 201){
                toast("Register user Successfully")
            }else{
                toast("Register failed")
            }
        }catch(e){
            console.log(e.message);
        }
    }

  return (
     <div className='container mx-auto flex items-center justify-center h-[100vh]'>
        <ToastContainer />
        <form onSubmit={Submit} className='w-[400px] '>
           <div className='flex flex-col my-2'>
                <label htmlFor="username">Username</label>
                <input className=' my-2 text-2xl border-2 border-red-500' type="text" name='username' value={username} onChange={e=> SetUsername(e.target.value)}/>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="email">Email</label>
                <input className=' my-2 text-2xl border-2 border-red-500' type="text" name='email' value={email} onChange={e=> Setemail(e.target.value)}/>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="password">Password</label>
                <input className=' my-2 text-2xl border-2 border-red-500' type="text" name='password' value={password} onChange={e=> Setpassword(e.target.value)}/>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="password_confirm">Password_confirm</label>
                <input className=' my-2 text-2xl border-2 border-red-500' type="text" name='password_confirm' value={password_confirm} onChange={e=> Setpassword_confirm(e.target.value)}/>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor="phone">Phone</label>
                <input className=' my-2 text-2xl border-2 border-red-500' type="text" name='phone' value={phone} onChange={e=> Setphone(e.target.value)}/>
            </div>
             <div className='flex justify-center '>
                <button type='submit' className='px-4 py-2 bg-red-500 text-white border border-lime-500 rounded-xl '>Submit</button>
            </div>
        </form>
        <Link to={"/login"}>Go Back To Login Page</Link>
      
    </div>
  )
}

export default Register
