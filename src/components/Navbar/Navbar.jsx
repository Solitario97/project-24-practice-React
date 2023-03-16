import React from 'react';
import n from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                Profile
            </div>
            <div className={n.item}>
                Messages
            </div>
            <div className={n.item}>
                About me
            </div>
            <div className={n.item}>
                meet
            </div>
        </nav>
    )
}

export default Navbar;
