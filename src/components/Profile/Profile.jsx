import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostContainer} from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostContainer/>
    </div>
}

export default Profile