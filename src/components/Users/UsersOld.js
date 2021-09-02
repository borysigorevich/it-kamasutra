import {User} from "./User/User";
import './Users.css'
import axios from "axios";

export const UsersOld = (props) => {

    axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            debugger
            if (props.users.usersList.length === 0) {
                props.setUsers(response.data.items)
            }
        })

    // if (props.users.usersList.length === 0) {
    //     props.setUsers(
    //         [
    //             {
    //                 name: 'Boris',
    //                 status: 'I\'m learning React.js',
    //                 location: {
    //                     city: 'Kiev',
    //                     country: 'Ukraine'
    //                 },
    //                 id: 1,
    //                 follow: true
    //             },
    //             {
    //                 name: 'Svetlana',
    //                 status: 'Just a person',
    //                 location: {
    //                     city: 'Snovsk',
    //                     country: 'Ukraine'
    //                 },
    //                 id: 2,
    //                 follow: false
    //             }
    //         ])
    // }

    return <div className={'users'}>
        <h1>Users</h1>
        <h2>helllo</h2>
        <button>Hello</button>
        <div className={'users__box'}>
            {props.users.usersList.map(user => {
                return <User name={user.name}
                             key={user.id}
                             status={user.status}
                             photo={user.photos}
                             location={user.location}
                             follow={user.follow}
                             id={user.id}
                             followToggle={props.followToggle}/>
            })}
        </div>
    </div>
}