import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from 'react'

const Dialogs = (props) => {

    let messageEelement = React.createRef()

    let addMessage = () => {
        let text = messagesElements.current.value;
        alert(text)
    }

    let dialogElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        <textarea ref={messagesElements}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add messages</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs