import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

export const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`

    return <div className={s.dialog}>
        <img src={props.imgUrl} alt="img"/>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}