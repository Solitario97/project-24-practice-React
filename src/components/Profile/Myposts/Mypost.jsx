import React from 'react';
import c from './Mypost.module.css';
import Post from './Post/Post';


const Mypost = (props) => {

    let PostElement = props.PostsData.map(p=><Post message={p.message} count={p.count}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updatePostText('');
    }   

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updatePostText(text);
    }
    
    
    return (
        <div className={c.item}>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={c.item}>
                {PostElement}
            </div>
        </div>
    )
}

export default Mypost;