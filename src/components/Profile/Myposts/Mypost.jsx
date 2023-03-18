import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = () => {
    return (
        <div className={c.item}>
            My posts
            <div className={c.item}>
                <Post message='Hello, my name is Amir' count="10"/>
                <Post message='My first work with props' count="300"/>
                <Post message='several day`s ago i bought macbook' count="1000"/>
            </div>
        </div>
    )
}

export default Mypost;