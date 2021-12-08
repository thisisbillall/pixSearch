import { useState } from "react";
import bars from "../images/bars.png";
import close from "../images/close.png";

const Navbar = () => {

    const[isMenuOpen,setIsMenuOpen] =useState(false);

    const menuHandler=()=>{
        (isMenuOpen)? setIsMenuOpen(false): setIsMenuOpen(true);
    };

    return ( 
        <div className=" w-full shadow-lg flex flex-row py-4 justify-between">
            <h1 className="text-4xl">pixSearch</h1>
           <ul className="hidden lg:flex lg:flex-row">
            <a href="#"  className="mx-3 text-lg px-4 border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white"><li>Home</li></a>
            <a href="#"  className="mx-3 text-lg text-lg px-4 border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white"><li>About</li></a>
            <a href="#"  className="mx-3 text-lg text-lg px-4 border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white" ><li>Contact</li></a>
           </ul>
           <button onClick={()=>{menuHandler()}} className="lg:hidden">
                {(isMenuOpen)?<img src={close} className="h-6 w-6"/> :<img src={bars} className="h-6 w-6" /> }
           </button>
           {(isMenuOpen)? sideMenu():""}
        </div>
     );
}
 
function sideMenu(){
    return(
        <div className="h-screen w-1/2 sm:w-1/4 my-20 bg-gray-500 lg:hidden">
            <ul className="flex flex-col ">
                <a href="#"  className="my-3 text-lg hover:bg-white"><li>Home</li></a>
                <a href="#"  className="my-3 text-lg hover:bg-white"><li>About</li></a>
                <a href="#"  className="my-3 text-lg hover:bg-white"><li>Contact</li></a>
                <a href="#"  className="my-3 text-lg hover:bg-white"><li>Home</li></a>
           </ul>
        </div>
    );
}
export default Navbar;