import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = () => {
    return (
        <div className={c.item}>
            My posts
            <div className={c.item}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Mypost;