import s from './Friend.module.css'

export const Friend = (props) => {
    return <div className={s.friendBlock}>
        <div className={s.img_box}>
            <img src={props.imgUrl} alt="img"/>
        </div>
        <div>
            {props.name}
        </div>
    </div>
}