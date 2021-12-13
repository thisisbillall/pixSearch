import { useState } from "react";
import banner from "../images/banner.jpg";
import FetchAllImages from "./FetchAllImages";
import ScrollUp from "./ScrollUp";
import Searchbar from "./Searchbar";
const Hero = () => {
    const [search,setSearch]= useState("nature");

    
    return (  
        <>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 py-48">
            <div>
                <h1 className="lg:text-8xl sm:text-2xl font-bold text-center">
                    We offer the best high quality images.
                </h1>
               <div className="my-20">
                    <button className="w-1/3 border-2 border-gray-500 hover:bg-black">
                        <h1 className="text-3xl hover:text-white py-3">Explore</h1>
                    </button>
               </div>
            </div>

            <div className="px-5 ">
                <img src={banner} alt="banner-img"/>  
            </div>
        </div>

        <div className="">

           <a href="#search-div">
                <ScrollUp/>
           </a>

            {/* <h1 className="text-black text-4xl py-14">Choose from 3M gallery</h1> */}
            <div className="" id="search-div">
                <Searchbar search={search} setSearch={setSearch}/>
            </div>
            <FetchAllImages search={search} no_of_img={72}/>
        </div>
    
        {/* fetch all images */}
    
        </>
        
    );
}
 
export default Hero;