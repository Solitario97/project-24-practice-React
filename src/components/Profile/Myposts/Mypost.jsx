import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = (props) => {

    let PostElement = props.PostsData.map(p=><Post message={p.message} count={p.count}/>)

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