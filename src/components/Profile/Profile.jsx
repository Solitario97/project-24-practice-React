import React from 'react';
import c from './Profile.module.css';
import Mypost from './Myposts/Mypost';

const Profile = (props) => {
    return (
        <div className={c.Profile}>
            <Mypost PostsData={props.profilePage.PostsData} newPostText={props.profilePage.newPostText} updatePostText={props.updatePostText} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;