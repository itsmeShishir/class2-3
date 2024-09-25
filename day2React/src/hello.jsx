import React from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HelloForm = () => {
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
    <div>
        <ToastContainer />
        <form onSubmit={Submit}>
           <div> 
                <label htmlFor="username">Username</label>
                <input type="text" name='username' value={username} onChange={e=> SetUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={email} onChange={e=> Setemail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" name='password' value={password} onChange={e=> Setpassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password_confirm">Password_confirm</label>
                <input type="text" name='password_confirm' value={password_confirm} onChange={e=> Setpassword_confirm(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" name='phone' value={phone} onChange={e=> Setphone(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default HelloForm
