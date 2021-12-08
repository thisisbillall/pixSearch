import { useEffect, useState } from "react";
require('dotenv').config()


const FetchAllImages = () => {

    const [allImages,setAllImages] = useState([]);
    const url = `https://pixabay.com/api/?key=21987099-da000e6d0bb9cc8cda8dd7d98&per_page=72`;
    // &q=yellow+flowers&image_type=photo&pretty=true

    const loadAllImages = async()=>{
        const resp = await fetch(url);
        const data = await resp.json();
        setAllImages(data.hits);
        console.log(allImages);
    }

     useEffect( () =>{
        loadAllImages();
    },[]);

    return ( 
        <>
            <div className="grid grid-cols-3 gap-2">
                {
                     allImages.map((elem)=>{

                        return (
                            <div className="">
                                <img  
                                    className=""                              
                                    src={elem.webformatURL} 
                                    style={{width:"500px",height:"400px",cursor:"pointer"}} alt="img"
                                >
                                </img>
                                <div className="opacity-0 hover:opacity-100 duration-300 text-xl text-white font-semibold">{elem.downloads}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
     );
}
 
export default FetchAllImages;