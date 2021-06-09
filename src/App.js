import React,{ useState,useEffect }from 'react';
import './post.css';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";


function App(){

const [data,setData]= useState([]); 
const [error,setError]=useState(null);
const [loading,setLoading]=useState(true);
const [url, setUrl] = useState("59b3f0b0100000e30b236b7e")


  useEffect(()=>{ 
 fetch(`http://www.mocky.io/v2/${url}`)
 .then(response=>{
   if(response.ok){
     return response.json()
   }
   throw response;
 })
 .then(data=>{
     setData(data.posts);
   })

 .catch(error=>{
   console.error("Error in Fetching",error);
   setError(error);
 })
 .finally(()=>{
   setLoading(false);
 })
 
  },[url])
  // Page startup message
  if(loading)return <h1 className="message">Loading...</h1>
  if(error) return <h1 className="message">Oops! Something went wrong.</h1>

  // To switch between the pages

  const paginate = (pageNumber) => {
    if(pageNumber === 1) {
      setUrl("59b3f0b0100000e30b236b7e")
     
    }
    else if(pageNumber === 2) {
      setUrl("59ac28a9100000ce0bf9c236")
    }
    else if(pageNumber === 3) {
      setUrl("59ac293b100000d60bf9c239")
    }
  }

  return(
    
    <div className="App">
      <h1 className="heading">All Posts</h1>
      <Posts posts={data}/>
      <Pagination paginate = {paginate}/>

    </div>
  )
}

export default App;
