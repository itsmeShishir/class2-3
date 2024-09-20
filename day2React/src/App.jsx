import {useState} from "react";
import "./app.css";
import MyButton from "./MyButton";
import PropsDatas from "./propsdata";
const App = () => {
  const [data, setData] = useState();
  console.log(data)
  console.log(setData)
  
  const yourName = "shishir";
  return (
    <div>
      <PropsDatas img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" name="shsihie" age="27" />
      <PropsDatas img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" name="hari" age="27" />
      <PropsDatas img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" name="ram" age="27" />
      <h2>Helo</h2>
      <p></p>
      <hr />      
      <MyButton owncss="bg-green-500 text-green px-8 py-4"/>
      <MyButton/>
      <h1 style={{fontSize: "30px", color:"green"}}>hello my name is {yourName}</h1>
    </div>
  )
}

export default App
