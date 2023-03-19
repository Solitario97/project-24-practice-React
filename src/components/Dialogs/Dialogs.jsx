import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return(
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Amir" id='1'/>
                <DialogItem name="Imran" id='2'/>
                <DialogItem name="Altair" id='3'/>
                <DialogItem name="Ecio" id='4'/>
                <DialogItem name="franchesko" id='5'/>
                <DialogItem name="Albina" id='6'/>
                <DialogItem name="German" id='7'/>
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