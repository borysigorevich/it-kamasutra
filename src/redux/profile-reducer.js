import {getStatus, setUserProfile as setUserProfileAPI, updateStatus} from '../API/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {id: 1, message: 'First Post', likes: 25},
        {id: 2, message: 'Second Post', likes: 30}
    ],
    // newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.newMessageBody,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        }
        // case UPDATE_NEW_TEXT_POST: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newMessageBody) => /*return*/({type: ADD_POST, newMessageBody})

export const updateNewPostTextActionCreator = (text) => /*return*/({
    type: UPDATE_NEW_TEXT_POST,
    newText: text
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}

export const setUserProfileThunk = (id) => {
    return (dispatch) => {
        setUserProfileAPI(id, (profile) => {
            dispatch(setUserProfile(profile))
        })
    }
}

export const getStatusThunk = userId => {
    return dispatch => {
        getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThunk = status => {
    return dispatch => {
        updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}