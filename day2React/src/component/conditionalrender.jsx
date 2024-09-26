import React from "react"
const Conditional = () => {
  const [sunil, Setsunil] = React.useState(true);

  const handle = ()=>{
   Setsunil(!sunil);
  }
  return (
    <div>
      <button onClick={handle}>Click</button>
      {
        sunil? <>
          Hello my name is sunil
        </>: <>
          no data found
        </>
      }
    </div>
  )
}

export default Conditional
