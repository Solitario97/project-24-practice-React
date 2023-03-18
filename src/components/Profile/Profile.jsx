import React from 'react';
import c from './Profile.module.css';
import Mypost from './Myposts/Mypost';



const Profile = () => {
    return (
        <div className={c.Profile}>
            <Mypost/>
        </div>
    )
}

export default Profile;