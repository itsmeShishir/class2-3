import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleProductPage = () => {
    const [data, Setdata] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                let response  = await axios.get(`https://backend.bhandarishishir.com.np/api/products/${id}/`)
                Setdata(response.data)
                console.log(response.data);

            }catch(e){
                console.log(e.message);
            }
        }
        fetchData();
    },[id])
  return (
    <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.stock}</p>
        
    </div>
  )
}

export default SingleProductPage