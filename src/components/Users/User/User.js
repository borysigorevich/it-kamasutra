import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import './User.css'
import {NavLink} from "react-router-dom";

export const User = (props) => {
    return <div className={'user'}>
        <div className={'user__side'}>
            <NavLink to={`/profile/${props.id}`}>
                {!props.photo.small ? (props.follow ? <EmojiEmotionsIcon className={'user__icon'}/> :
                    <SentimentDissatisfiedIcon className={'user__icon'}/>) :
                    <img src={props.photo.small} alt="img" className={'user__img'}/>}
            </NavLink>
            <button disabled={props.isFollowingProgress.some(id => {
                return id === props.id
            })} onClick={() => {
                if (!props.follow) {
                    props.followThunkCreator(props.id)
                } else {
                    props.unfollowThunkCreator(props.id)
                }
            }
            }>{props.follow ? 'Unfollow' : 'Follow'}</button>
        </div>
        <div className={'user__content'}>
            <div className={'user__left'}>
                <h3 className={'user__name'}>
                    {props.name}
                </h3>
                <p className={'user__description'}>
                    {props.status}
                </p>
            </div>

            <div className={'user__right'}>
                <h4 className={'user__residence'}>
                    <p>{'props.location.country'},</p>
                    <p>{'props.location.city'}</p>
                </h4>
            </div>
        </div>
    </div>
}