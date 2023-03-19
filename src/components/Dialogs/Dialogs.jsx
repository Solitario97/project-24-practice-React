import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Amir</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Anuar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Albina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Wakanda</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Alexander</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/7'>Alya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>How are u?</div>
                <div className={s.message}>do u know?</div>
                <div className={s.message}>i love Turkey</div>
                <div className={s.message}>Yes, u right</div>
            </div>
        </div>
    )
}

export default Dialogs; 