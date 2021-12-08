import banner from "../images/banner.jpg";
import FetchAllImages from "./FetchAllImages";

const Hero = () => {
    return (  
        <>
        <div className="py-20">
            <input className="my-5 py-3 px-3 w-1/2 border-2 border-black rounded-full" 
            type="text" placeholder="Search for Images here ..."/>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
                <h1 className="text-8xl font-bold text-center">
                    We offer the best high quality images.
                </h1>
               <div className="my-20">
                    <button className="w-1/3 border-2 border-gray-500 hover:bg-black">
                        <h1 className="text-3xl hover:text-white py-3">Explore</h1>
                    </button>
               </div>
            </div>

            <div className="px-5">
                <img src={banner} alt="banner-img"/>  
            </div>
        </div>

        <div className="bg-black">
            <h1 className="text-white text-4xl py-14">Choose from 3M gallery</h1>
            <FetchAllImages/>
        </div>

        {/* fetch all images */}
    
        </>
        
    );
}
 
export default Hero;