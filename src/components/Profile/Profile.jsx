import React from 'react';
import c from './Profile.module.css';
import Mypost from './Myposts/Mypost';


let PostsData = [
    {message: 'Hello, my name is Amir', count: '10'},
    {message: 'My first work with props', count: '300'},
    {message: 'several day`s ago i bought macbook', count: '1000'},
];


const Profile = () => {
    return (
        <div className={c.Profile}>
            <Mypost PostsData={PostsData}/>
        </div>
    )
}

export default Profile;