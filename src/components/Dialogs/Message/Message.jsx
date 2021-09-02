import s from '../Dialogs.module.css'

export const Message = (props) => {
    return <div className={`${s.message} ${props.id % 2 === 0 ? s.message_right : null}`}>{props.message}</div>
}