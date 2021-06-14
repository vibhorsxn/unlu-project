import React from 'react';

const Search =({handleSearch})=>{
    // const [name,setName] = useState("");
    // const handleChange=(e)=>{
    //     setName(e.target.value)
    const handleKeyPress=(e)=>{
        if(e.keyCode===8){
            handleSearch(e.target.value);
        }
        // console.log(e,"handle key");
        // handleSearch()
    }
    return(
        <form style={{textAlign:"center", padding:"10px"}}>
            <input placeholder="Search" onKeyDown={handleKeyPress} onChange={(e)=> {handleSearch(e.target.value)}} /> 
        </form>
    )
}


export default Search;