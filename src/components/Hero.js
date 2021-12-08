import banner from "../images/banner.jpg";

const Hero = () => {
    return (  
        <>
        <div>
            <input className="my-5 py-3 px-3 w-1/2 border-2 border-black rounded-full" 
            type="text" placeholder="Search for Images here ..."/>
        </div>
        <div className="my-12 grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
                <h1 className="text-8xl font-bold text-center">
                    We offer the best high quality images.
                </h1>
               <div className="my-20">
                    <button className="w-1/3 border-2 border-gray-500 hover:bg-gray-500">
                        <h1 className="text-3xl hover:text-white">Explore</h1>
                    </button>
               </div>
            </div>

            <div>
                <img src={banner}/>  
            </div>
        </div>
        </>
    );
}
 
export default Hero;