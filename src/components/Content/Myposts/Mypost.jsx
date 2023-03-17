import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = () => {
    return (
        <div>
            My posts
            <div className={c.Posts}>
                <Post/>
            </div>
        </div>
    )
}

export default Mypost;