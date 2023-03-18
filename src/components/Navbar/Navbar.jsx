import React from 'react';
import n from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <a href='/profile'>
                    Profile
                </a>
            </div>
            <div className={n.item}>
                <a href='/dialogs'>
                    Messages
                </a>
            </div>
            <div className={n.item}>
                <a href='/news'>
                    News
                </a>
            </div>
            <div className={n.item}>
                <a href='/music'>
                    Music
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
