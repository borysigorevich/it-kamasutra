import React from 'react';
import {User} from "./User/User";
import './Users.css'
import {followThunkCreator, unfollowThunkCreator} from "../../redux/users-reducer";

const Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 1000)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={'users'}>
            <div className={'users__span-box'}>
                {pages.map(page => {
                    return <span
                        className={`users__span ${props.currentPage === page ? 'users__span--selected' : null}`}
                        onClick={(event) => {
                            props.onPageChanged(page)
                        }
                        }>{page}</span>
                })}
                <div className={'users__box'}>
                    {props.users.map(user => {
                        return <User name={user.name}
                                     key={user.id}
                                     status={user.status}
                                     photo={user.photos}
                                     location={user.location}
                                     follow={user.followed}
                                     id={user.id}
                                     followToggle={props.followToggle}
                                     isFollowingProgress={props.isFollowingProgress}
                                     toggleFollowingProgress={props.toggleFollowingProgress}
                                     followThunkCreator={props.followThunkCreator}
                                     unfollowThunkCreator={props.unfollowThunkCreator}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Users;