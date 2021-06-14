import React from "react";
import Post from "./Post";

const Posts = ({posts}) => {
    return(
        <div>
             {
               //mapping throught the each array present in {Data}
      posts.map((post)=>{
    
        return <Post key={post.id}
        url={post.thumbnail_image}
        name={post.event_name} 
        date={post.event_date} 
        view={post.views} 
        like={post.likes} 
        share={post.shares} 
        
        /> 

      } )  
      
    }
        </div>
    )
}

export default Posts;