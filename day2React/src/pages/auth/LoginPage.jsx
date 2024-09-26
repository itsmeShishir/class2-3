import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
    const [email, SetEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            let response = await axios.post('https://backend.bhandarishishir.com.np/api/login/', {
                email,
                password
            })
            console.log(response)
            if(response.status == 200){
                toast("login successfully");
            }else{
                toast("login failed");
            }
        }catch(e){
            console.log(e.message)
        }
    }
  return (
    <div className='container mx-auto flex items-center justify-center h-[100vh]'>
        <ToastContainer />
      <form onSubmit={handleSubmit} className='w-[400px] '>
        <div className='flex flex-col my-2'>
           <label htmlFor='email'>Email</label>
          <input type="email" placeholder='email' name='email' 
          value={email} onChange={(e)=> SetEmail(e.target.value)} className=' my-2 text-2xl border-2 border-red-500'/>
        </div>
        
        <div className='flex flex-col my-2'>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='******' name='password' 
            value={password} onChange={(e)=> setPassword(e.target.value)} className=' my-2 text-2xl border-2 border-red-500'/>
        </div>
        <div className='flex justify-center '>
        <button type='submit' className='px-4 py-2 bg-red-500 text-white border border-lime-500 rounded-xl '>Submit</button>

        </div>
      </form>
    </div>
  )
}

export default LoginPage
