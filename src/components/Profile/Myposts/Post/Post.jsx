import React from 'react';
import c from './Post.module.css';


const Post = (props) => {
    return (
        <div className={c.item}>
            {props.message}
            {" "}like: {props.count}   
        </div>
        
    )
}

export default Post;