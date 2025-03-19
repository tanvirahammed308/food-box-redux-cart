
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cartSlice";



const FoodCart = ({item}) => {
  const {id,name,rating,img,price,quantity}=item;
  const dispatch=useDispatch()
    
  return (
    <div className="shadow-md p-5">
        <div className="flex justify-center relative">
            <img src={img} alt="food-img"  className="w-14 "/>
            <div className="flex justify-center items-center">

            <p className="capitalize font-semibold text-sm text-[#184D47] ">{rating}</p>
            <div className="absolute right-0">
    <FaTrashAlt className="text-red-600 w-3 h-3" onClick={()=>dispatch(removeFromCart(id))}/>
</div>
            </div>
           

        </div>
        <div className="flex py-2 justify-between ">
            <p className="capitalize font-semibold text-sm text-[#184D47]">{name}</p>
            
            <p className="capitalize font-semibold text-sm text-[#184D47]">{price} tk</p>
        </div>
        <div className="flex justify-around items-center">
        <CiSquarePlus className="size-6 text-[#184D47]"   onClick={() => dispatch(increaseQuantity(id))}/>
        <span>{quantity}</span>
        <CiSquareMinus className="size-6 text-[#184D47]" onClick={() => dispatch(decreaseQuantity(id))}/>


        </div>
    </div>
  )
}

export default FoodCart