import axios from "axios";
import { useState, useEffect, useRef, useReducer, useMemo } from "react";
import ProductPage from "./ProductPage";

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


const HomePage = () => {
 const ref = useRef(null);
 const scrollIntoView = ()=>{
    ref.current.scrollIntoView({behaviour: "smooth"})
 }

  const datas = useMemo(()=>{
    return <>
      <button onClick={scrollIntoView}>Go back to top</button>
    </>

  },[])
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [category, SetCategory] = useState([]);
  // const [product, SetProduct] = useState([]);
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response  = await axios.get("https://backend.bhandarishishir.com.np/api/category/");
        SetCategory(response.data);
      }catch(e){
        console.log(e.message);
    }
  }
    fetchData()
},[]);
console.log(category);

  return (
    <div className="container mx-auto">
      <div ref={ref}></div>
      <p>{state.count}</p>
      <button onClick={()=> dispatch({type:"increment" })}>Increment</button>
      <button onClick={()=> dispatch({type:"descrement" })}>Descrement</button>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-between">
          {
            category.map((data, index) => {
              return <>
                <div key={index} >
                    <h1>{data.name}</h1>
                </div>
              </>
            })
          }
      </div>
          <ProductPage />
          {datas}
    </div>
  )
}
//usestate, useeffect, useref, usecallback, usereducer, usememo, useContext, Context Api , Custom Hooks
export default HomePage
