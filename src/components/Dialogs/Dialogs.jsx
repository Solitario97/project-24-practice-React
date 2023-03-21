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

    let DialogData = [
        {name:"Amir", id:'1'},
        {name:"Imran", id:'2'},
        {name:"Altair", id:'3'},
        {name:"Ecio", id:'4'},
        {name:"Franchesko", id:'5'},
    ]

    let MessageData = [
        {message:'How are u?', id:'1'},
        {message:'Amir your two safes are full of money, where to put the money now', id:'2'},
        {message:'Have you already bought a Porsche or are you just going to get it ?', id:'3'},
        {message:"Let's fly to France for a couple of days on the way back", id:'4'},
    ]

    let DialogElement = DialogData.map(d=><DialogItem name={d.name} id={d.id} />)


    let MessageElement = MessageData.map(m=><Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { DialogElement }
            </div>
            
            <div className={s.messages}>
                { MessageElement }
            </div>
        </div>
    )
}

export default Dialogs; 