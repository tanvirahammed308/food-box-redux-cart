import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


const FoodCard = ({item}) => {
   
    const {id,name,img,price,category,desc,rating}=item;
    console.log(item);

    const dispatch=useDispatch();
    const handleAddToCart=()=>{
      dispatch(addToCart({
        id,price,rating,name,quantity:1,img
       
      }))
      toast.success('Successfully toasted!')
      
    }
  return (
    <div className="border-2 border-[#184D47] w-[350px] mx-auto p-5 space-y-3 shadow-md flex flex-col rounded">
        <div className="flex justify-center ">
            <img src={img} alt="food-img" className="w-32 "/>
        </div>
        <div className=" text-[#184D47]">
            <p className="font-semibold text-center border-b-2 py-4">{name}</p>
            <div className="flex justify-between my-2">
            <p className="text-[#184D47]">{rating}</p>
            <p className="font-semibold">{price} tk</p>
            </div>
        </div>
        <div className="flex-grow ">

        <p >{desc}</p>
        </div>
        
        <button className="capitalize bg-[#184D47] text-white px-5 py-3 rounded-md w-full font-semibold" onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default FoodCard






