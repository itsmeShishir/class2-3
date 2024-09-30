import { useReducer } from "react";

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
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={()=> dispatch({type:"increment" })}>Increment</button>
      <button onClick={()=> dispatch({type:"descrement" })}>Descrement</button>
    </div>
  )
}
//usestate, useeffect, useref, usecallback, usereducer, usememo, useContext
export default HomePage
