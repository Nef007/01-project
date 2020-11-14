import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from 'react'
import {sendMessageCrator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage



    let onSendMessageClick = () => {
        props.sendMessage();

    }
    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);

    }

    let dialogElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)

    let newMessageBody = state.newMessageBody



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <div>
                    <div>
                        <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                                  placeholder='Введите текст'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add messages</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs