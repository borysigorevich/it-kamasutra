import {getUsers, unfollow} from "../API/api";
import {follow as followAPI} from '../API/api'

const TOGGLE = 'TOGGLE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE: {
            // let stateCopy = {
            //     ...state,
            //     usersList: state.usersList.map(el => {
            //         return el
            //     })
            // }
            // stateCopy.usersList[action.id - 1].follow = !stateCopy.usersList[action.id - 1].follow
            // return stateCopy
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {
                            ...el,
                            followed: !el.followed
                        }
                    }
                    return el
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => {
                            return id !== action.userId
                        })

            }
        }
        default: {
            return state
        }
    }
}

export const follow = (id) => ({type: TOGGLE, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalCount(response.totalCount))
        })
    }
}

export const onPageChangedThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        getUsers(page, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
        })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        followAPI(id).then(response => {
            console.log('are we here')
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        }).catch(err => {
            console.log('follow')
            dispatch(toggleFollowingProgress(false, id))
        })
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        unfollow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        }).catch(err => {
            console.log('unfollow')
            dispatch(toggleFollowingProgress(false, id))
        })
    }
}