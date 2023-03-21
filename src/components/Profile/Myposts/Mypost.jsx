import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = () => {

    let PostsData = [
        {message: 'Hello, my name is Amir', count: '10'},
        {message: 'My first work with props', count: '300'},
        {message: 'several day`s ago i bought macbook', count: '1000'},
    ];

    let PostElement = PostsData.map(p=><Post message={p.message} count={p.count}/>)

    return (
        <div className={c.item}>
            My posts
            <div className={c.item}>
                {PostElement}
            </div>
        </div>
    )
}

export default Mypost;