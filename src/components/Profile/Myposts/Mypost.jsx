import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = () => {

    let PostData = [
        {message: 'Hello, my name is Amir', count: '10'},
        {message: 'My first work with props', count: '300'},
        {message: 'several day`s ago i bought macbook', count: '1000'},
    ];



    return (
        <div className={c.item}>
            My posts
            <div className={c.item}>
                <Post message={PostData[0].message} count={PostData[0].count}/>
                <Post message={PostData[1].message} count={PostData[1].count}/>
                <Post message={PostData[2].message} count={PostData[2].count}/>
            </div>
        </div>
    )
}

export default Mypost;