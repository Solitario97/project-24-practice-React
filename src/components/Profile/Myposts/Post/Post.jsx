import React from 'react';
import c from './Post.module.css';


const PostsData =(props) => {
    return (
        message={props.message} count={props.count}
    )
}


const Post = (props) => {
    return (
        <div className={c.item}>
            {props.message}
            <div>
                {" "}like: {props.count} 
            </div>  
        </div>
        
    )
}

export default Post;