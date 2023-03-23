import React from 'react';
import c from './Profile.module.css';
import Mypost from './Myposts/Mypost';



const Profile = (props) => {
    return (
        <div className={c.Profile}>
            <Mypost PostsData={props.state.PostsData}/>
        </div>
    )
}

export default Profile;