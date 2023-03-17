import React from 'react';
import c from './Content.module.css';
import Mypost from './Myposts/Mypost';



const Content = () => {
    return (
        <div className={c.Content}>
            <Mypost/>
        </div>
    )
}

export default Content;