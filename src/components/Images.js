import { useState } from "react";
import FetchAllImages from "./FetchAllImages";
import ScrollUp from "./ScrollUp";
import Searchbar from "./Searchbar";

const Images = () => {
   const [search,setSearch] = useState("cats");
    return ( 
        <> 
           <div className="py-8" id="search-div">
              <Searchbar search={search} setSearch={setSearch} />
              <FetchAllImages search={search} no_of_img={198}/>
            
           </div>
           <a href="#search-div">
               <ScrollUp/>
           </a>
        </>
     );
}
 
export default Images;