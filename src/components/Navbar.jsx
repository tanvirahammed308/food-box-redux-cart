import moment from "moment";
import logo from "../assets/img/fast-food-logo.png";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router";
import CartContainer from "./cart/CartContainer";



const Navbar = () => {

  const [isNavOpen,setIsNavOpen]=useState(false)
    const toggleNav=()=>{
      setIsNavOpen(!isNavOpen)

    }

    // for cart

const [isCartOpen,setIsCartOpen]=useState(false);


  const dateShow = moment().format("MMMM Do YYYY, h:mm:ss a");
  const navLinks = (
    <>
      <li>
        <Link to={"/"}> <button onClick={()=>setIsNavOpen(false)}>Home</button></Link>
       
      </li>
      <li>
        <Link to={"/about"}>
        <button onClick={()=>setIsNavOpen(false)}>About</button>
        </Link>
      </li>
      <li>
        <button onClick={()=>{setIsCartOpen(true)
          setIsNavOpen(false)
        }}>
        <FaCartArrowDown size={25}/>

        </button>
      </li>
    </>


  );
  return (
    <div className="bg-[#184D47] py-2 text-white">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* logo and name */}
        <div className="flex flex-col items-center ">
          <img src={logo} alt="logo" className="w-16 animate-bounce " />
          <h2 className="font-semibold">Food Box</h2>
        </div>
        {/* time and tag line */}
        <div className="w-[250px]  md:w-[350px] flex flex-col justify-center items-center">
          {dateShow}
          <marquee direction="">
            <p>Delicious Bites, Delivered Right!</p>
          </marquee>
        </div>
        {/* for desktop */}
        <div className="hidden md:block">
          <ul className="flex gap-5 font-bold">{navLinks}</ul>
        </div>

        {/* for mobile */}
        <div className="block md:hidden transition delay-150 ease-in-out" onClick={toggleNav}>
        {  isNavOpen ?<IoIosCloseCircleOutline  size={30}/>:<TiThMenuOutline  size={30}/>
        }


        </div>
        {
          isNavOpen && <div className="block md:hidden absolute top-20 right-0 bg-[#184D47] p-8 w-[50%] h-[50%] z-20">
            <ul className="space-y-3 flex flex-col justify-center items-center font-bold mt-5">
              {navLinks}
            </ul>
          </div>
        }
      </div>
      {/* cart */}
      {
        isCartOpen && <CartContainer handleCart={()=>setIsCartOpen(false)}/>
      }
    </div>
  );
};

export default Navbar;
