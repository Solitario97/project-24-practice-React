import React from 'react';
import c from './Post.module.css';


const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="./fox.jpg" alt="fox" />
            {props.message}
            <div>
                {" "}like: {props.count} 
            </div>  
        </div>
        
    )
}

export default Post;