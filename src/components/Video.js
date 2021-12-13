import { useState } from "react";
import FetchAllVideos from "./FetchAllVideos";
import ScrollUp from "./ScrollUp";
import Searchbar from "./Searchbar";

const Video = () => {
    const [search,setSearch] = useState("car");
    return ( 
        <>
        <div className="py-8" id="search-div">
              <Searchbar search={search} setSearch={setSearch} />
              <FetchAllVideos search={search} no_of_vdo={200}/>
            
           </div>
           <a href="#search-div">
               <ScrollUp/>
           </a>
        </>
     );
}
 
export default Video;