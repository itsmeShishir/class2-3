import axios from "axios";
import React from "react"
const ProductPage = () => {
  const [data, Setdata] = React.useState([]);
  const [loading , SetLoading] = React.useState(true);
  const [error , SetError] = React.useState(null);

  const datainfo = React.useCallback(async()=>{
       try{
        let response = await axios.get("https://backend.bhandarishishir.com.np/api/products/")
        Setdata(response.data.results)
        SetLoading(false)
      }catch(e){
        SetError(e.message)
      }
  },[]);

  React.useEffect(()=>{
    datainfo()
  },[datainfo]);
  console.log(data)

  if (loading){
    return <>
    <h1>Loading ...</h1>
    </>
  }
  if (error){
    return<>
    <h1>{error}</h1>
    </>
  }
  return (
    <>
      <div>
        <h1>Product Page</h1>
        {
          data.map((item)=>{
            return <div key={item.id}>
              <img src={item.images[0]?.image} alt="" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default ProductPage
