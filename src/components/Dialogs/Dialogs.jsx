import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from 'react'
import {sendMessageCrator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {Form, Field }  from "react-final-form";

const Dialogs = (props) => {

    let state = props.dialogsPage

    const onSubmit = (values) => {

        props.sendMessage(values.newMessageBody);

    }

    let dialogElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)


    if (!props.isAuth) return <Redirect to={'/login'}/>;



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <div>
                    <div>
                        <AddMessageForm onSubmit={onSubmit} />
                    </div>

                </div>
            </div>

        </div>
    )
}



const AddMessageForm = (props) => {

    return <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component="textarea" name="newMessageBody" placeholder="Введите текст"/>
                </div>
                <div>
                    <button>Отправить</button>
                </div>

            </form>

        )}
    />

}

export default Dialogs