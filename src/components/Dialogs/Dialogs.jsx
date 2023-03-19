import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className="dialogs-item">
                <div className="dialog">
                    Amir
                </div>
                <div className="dialog">
                    Dima
                </div>
                <div className="dialog">
                    Albina
                </div>
                <div className="dialog">
                    Mira
                </div>
                <div className="dialog">
                    Mom
                </div>
                <div className="dialog">
                    Anuar
                </div>
                <div className="dialog">
                    Alya
                </div>
            </div>
            <div className="messages">
                <div className="message">How are u?</div>
                <div className="message">do u know?</div>
                <div className="message">i love Turkey</div>
                <div className="message">Yes, u right</div>
            </div>
        </div>
    )
}

export default Dialogs; 