import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-[#184D47] ">
        <div className="w-[90%] mx-auto py-5 block md:flex justify-between items-center ">
            <div className="flex flex-col justify-center items-center text-white space-y-1">
                <img src="/src/assets/img/fast-food-logo.png" alt="logo"  className="w-14"/>
                <h2>Food box</h2>
            </div>
            <div className="py-2">
                <p className="text-white text-center">Copyright © Tanvir. All Rights Reserved.</p>
            </div>
            <div className="flex justify-around gap-10 text-2xl text-white">
            <FaFacebook />
            <FaYoutube />
            <FaInstagramSquare />



            </div>

        </div>
    </div>
  )
}

export default Footer