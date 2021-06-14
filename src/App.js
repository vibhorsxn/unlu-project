import React,{ useState,useEffect }from 'react';
import './post.css';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Search from "./components/Search";


function App(){

const [data,setData]= useState([]); 
const [error,setError]=useState(null);
const [loading,setLoading]=useState(true);
const [url, setUrl] = useState("59b3f0b0100000e30b236b7e");
const [sortType,setSortType]=useState('');

  useEffect(()=>{ 
    //string interpolation
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

  useEffect( () => {
    const ProgressEvent = (type) => {
      // const types = {
      //   date : "event_date",
      //   shares:"shares",
      //   likes: "likes",
      //   views: "views"
      // }
      // const sortProperty = types[type];
      const sorted = [...data].sort( (a,b) => b[type] - a[type]);
      setData(sorted);
    }
    ProgressEvent(sortType);
  },[sortType])
  
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
  
  const eventName=(e)=>{  
    console.log( e,"**number**");
    let arr=[];

    for(const x of data) //h
    {
      let g=x.event_name.toLowerCase();  
    
      if(g.startsWith(e))
      {
       arr.push(x);
      }
    }
    // console.log(arr);
    setData(arr);
  }

  return(
    
    <div style={{textAlign:"center"}}className="App">
      <select style={{margin:"1px auto", width:"200px"}} onChange={(e) => setSortType(e.target.value)}> 
        <option value="">--Sort--</option>
        <option value="event_date">Date</option>
        <option value="likes">Likes</option>
        <option value="views">Views</option>
        <option value="shares">Share</option>
      </select>

      {/* {data.map(posts => (
        <div key={posts.id} style={{ margin: '30px' }}>
          <div>{`Date: ${posts.event_date}`}</div>
          <div>{`likes: ${posts.likes}`}</div>
          <div>{`views: ${posts.views}`}</div>
          <div>{`share: ${posts.shares}`}</div>
        </div>
      ))} */}
      <h1 className="heading">All Posts</h1>
      <Search handleSearch={eventName}/>
      <Posts posts={data}/>
      {/* data is array consistof many other arrays */}
      <Pagination paginate = {paginate}/>

    </div>
  )
}

export default App;
