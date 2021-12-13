const Searchbar = ({search,setSearch}) => {
    return ( 
        <>
                <input className="my-20 py-3 px-3 w-1/2 border-2 border-black rounded-full" 
                type="text" placeholder="Search for Images here ..."
                value={search} onChange={e=>{setSearch(e.target.value)}}
                />
        </>
     );
}
 
export default Searchbar;