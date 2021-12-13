import { useEffect, useState } from "react";
require('dotenv').config()


const FetchAllVideos = ({search,no_of_vdo}) => {

    const [allImages,setAllImages] = useState([]);
    const url = `https://pixabay.com/api/videos/?key=21987099-da000e6d0bb9cc8cda8dd7d98&q=${search}&pretty=true&per_page=${no_of_vdo}`;

    const loadAllImages = async()=>{
        const resp = await fetch(url);
        const data = await resp.json();
        setAllImages(data.hits);
        console.log(allImages);
    }

     useEffect( () =>{
        loadAllImages();
    },[search]);

    return ( 
        <>
            <div className="grid grid-cols-3 gap-2">

                
                {
                     allImages.map((elem)=>{

                        return (
                           <a href={elem.videos.large.url} target="_blank" rel="noreferrer">
                                <div className="cursor-pointer">
                                    <video className="" src={elem.videos.tiny.url}></video>
                                </div>
                                {/* <div>
                                    <i className="fas fa-play-circle relative text-6xl bottom-30 "></i>
                                </div> */}
                           </a>
                        )
                    })
                }
            </div>
        </>
     );
}
 
export default FetchAllVideos;