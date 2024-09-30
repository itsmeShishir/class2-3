import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
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
      <div className="container mx-auto">
        <h1 className="text-center my-5 text-3xl font-semibold">Product Page</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            data.map((item)=>{
              return <div key={item.id} className="w-full shadow-md rounded-lg my-5 ">
                <div className="p-10">
                  <img src={item.images[0]?.image} alt="" className="w-[350px] h-[450px] object-fill"/>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <Link to={`/singleproduct/${item.id}`} className="px-6 py-4 bg-red-500 text-white
                 inline-block my-5">{`Go to ${item.name} `}</Link>
                </div> 
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductPage
