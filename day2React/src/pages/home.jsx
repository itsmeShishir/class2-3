import {useState, useEffect, useRef} from "react";
import "./app.css";
import axios from "axios"
// import Forms from "./form";
// import HelloForm from "./hello";
//npm i axios

// import MyButton from "./MyButton";
// import PropsDatas from "./propsdata";
const Home = () => {
  // const [data, setData] = useState(0);
  const [info, SetInfo] = useState([]);
  const one = useRef(null)
 
  console.log(one.current)
  const buton = ()=>{
    if(one.current){
      one.current.style.color = "red";
    }
  }
  
  console.log(one)
  //get the api class (get, post, put, patch , delete)
  useEffect(()=>{
    const fetchdata = async()=>{
      // try{
      // const response  = await fetch("https://fakestoreapi.com/products");
      // const data = await response.json()
      // SetInfo(data)
      // }catch(e){
      //   console.log(e.message)
      // }
      //axios start here
      try{
      const response  = await axios.get("https://fakestoreapi.com/products");
      SetInfo(response.data)
      }catch(e){
        console.log(e.message)
      }
    }
    fetchdata()
  },[])
  console.log(info)


   
  // const yourName = "shishir";
  return (
    <div>
      <p ref={one} onClick={buton}>HEllo</p>
      {/* <HelloForm /> */}
      {/* <Forms /> */}
      {/* <button onClick={()=> setData(data+1)}>Add +</button>
      <p>{data}</p>
      <button onClick={()=> setData(data-1)}>Sub -</button>
      <button onClick = {()=> setData(0)}>reset</button>

      {
        info.map(datas=> 
          <div key={datas.id}>
            {datas.title}
            <img src={datas.image} alt="" />
          </div>
        )
      } */}

      {/* <PropsDatas img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" name="shsihie" age="27" />
      <PropsDatas img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" name="hari" age="27" />
      <PropsDatas img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" name="ram" age="27" />
      <h2>Helo</h2>
      <p></p>
      <hr />      
      <MyButton owncss="bg-green-500 text-green px-8 py-4"/>
      <MyButton/>
      <h1 style={{fontSize: "30px", color:"green"}}>hello my name is {yourName}</h1> */}
      

    </div>
  )
}

export default Home
