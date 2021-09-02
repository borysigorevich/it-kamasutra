import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}
                   validate={[required, maxLength100]}
            />
            {/*<textarea onChange={handleMessageChange} ref={textAreaRef}*/}
            {/*          value={dialogPage.newMessageText}/>*/}
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {

    // let textAreaRef = React.createRef()

    // const addMessage = () => {
    //     props.addMessage()
    // }

    // const handleMessageChange = () => {
    //     let newMessage = textAreaRef.current.value
    //     props.updateMessage(newMessage)
    // }

    if (!props.isAuth) {
        console.log('are we here')
        return <Redirect to={'/login'}/>
    }

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogPage.dialogs.map(el => {
                    return <DialogItem key={el.id} name={el.name} id={el.id} imgUrl={el.imgUrl}/>
                })}
            </div>
            <div className={s.messages}>
                {props.dialogPage.messages.map(el => {
                    return <Message key={el.id} message={el.message} id={el.id}/>
                })}
                <AddMessageFormRedux onSubmit={addNewMessage} dialogPage={props.dialogPage}/>
            </div>
        </div>)
}

export default Dialogs