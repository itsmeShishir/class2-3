import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Forms = () => {
    const [email, SetEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/login/', {
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
    <div>
        <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type="email" placeholder='email' name='email' 
        value={email} onChange={(e)=> SetEmail(e.target.value)}/>
        
        <label htmlFor='password'>Password</label>
        <input type="password" placeholder='******' name='password' 
        value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Forms
