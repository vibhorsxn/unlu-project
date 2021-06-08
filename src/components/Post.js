import React, {useState,useEffect}from 'react';


function Post({name, like, view, share, date, url}) {

    const [show, setShow] = useState(false);

    useEffect( () => {
        setShow(false)
    },[])

    const handleClick = () => {
        // alert("WELCOME")

        setShow(!show);  
    }
    return (
        
        <div className="post">
            {console.log(show)}
            <img className="profile" alt="profile" src={url}/>
            
            <div className="ename">
            <button onClick = {handleClick}>
                <i class="fas fa-chevron-circle-up"></i>
            </button>
                <h3>
                    Event name {name}
                </h3>
                
                  
            </div>

            {show &&             <div className="details">
                    <p> <i class="fas fa-calendar-day"></i> {date} </p>
                
                <div className="view">
                    <p> <i class="fas fa-eye"></i> {view} </p>
                    
                    <p><i class="fas fa-thumbs-up"></i> {like} </p>

                    <p> <i class="fas fa-share"></i> {share} </p>
                </div>

            </div>

            }
        </div>
    )

}

export default Post