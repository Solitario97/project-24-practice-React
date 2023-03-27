import React from "react";
import { NavLink } from "react-router-dom";
import { addPost } from "../../redux/state";
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


    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
        newMessageElement.current.value = " ";
    }

    let DialogElement = props.state.DialogData.map(d=><DialogItem name={d.name} id={d.id} />)


    let MessageElement = props.state.MessageData.map(m=><Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { DialogElement }
            </div>
            
            <div className={s.messages}>
                { MessageElement }
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
            </div>
           
        </div>
    )
}

export default Dialogs; 