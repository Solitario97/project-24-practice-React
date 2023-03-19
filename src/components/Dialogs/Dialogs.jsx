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

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
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
                <DialogItem name="Franchesko" id='5'/>
                <DialogItem name="Albina" id='6'/>
                <DialogItem name="German" id='7'/>
            </div>
            <div className={s.messages}>
                <Message message='How are u?'/>
                <Message message='Amir your two safes are full of money, where to put the money now'/>
                <Message message='Have you already bought a Porsche or are you just going to get it ?'/>
                <Message message="Let's fly to France for a couple of days on the way back"/>
            </div>
        </div>
    )
}

export default Dialogs; 