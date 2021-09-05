import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export const ProfileInfo = (props) => {

    return <div>
        <div>
            {props.profile ? (props.profile.photos.small ?
                <img className={s.content__img} src={props.profile.photos.small} alt={'img'}/> :
                <ImageSearchIcon className={s.profile__info_img}/>) : <Preloader/>}
        </div>
        <div className={s.descriptionBlock}>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}