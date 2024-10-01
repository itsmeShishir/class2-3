import axios from "axios";
import { useState, useEffect, useReducer } from "react";

 const reducer = (state, action) => {
    switch(action.type){
      case "increment":
        return {count : state.count + 1};
      case "descrement":
        return {count : state.count-1}
      default:
        return state;
  }
}
const BlogPage = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [category, SetCategory] = useState([]);
  // const [product, SetProduct] = useState([]);
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response  = await axios.get("https://backend.bhandarishishir.com.np/api/blogs/");
        SetCategory(response.data.results);
      }catch(e){
        console.log(e.message);
    }
  }
    fetchData()
},[]);
console.log(category);

  return (
    <div className="container mx-auto">
      <p>{state.count}</p>
      <button onClick={()=> dispatch({type:"increment" })}>Increment</button>
      <button onClick={()=> dispatch({type:"descrement" })}>Descrement</button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-between">
          {
            category.map((data, index) => {
              return <>
                <div key={index} >
                    <h1>{data.title}</h1>
                </div>
              </>
            })
          }
      </div>

    </div>
  )
}
//usestate, useeffect, useref, usecallback, usereducer, usememo, useContext
export default BlogPage
