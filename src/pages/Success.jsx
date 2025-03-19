import { useEffect, useState } from "react"
import { FadeLoader } from "react-spinners";

const Success = () => {
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
  return (
    <div className="h-screen flex justify-center items-center font-bold">
        {
            loading ? <FadeLoader />:<h1>Thank you for your order! Your order has been placed successfully.</h1>
        }
        
    </div>
  )
}

export default Success