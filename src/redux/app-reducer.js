import {setUserDataThunk} from "./auth-reducer";

const INITIALIZED_SUCCESSFUL = 'INITIALIZED_SUCCESSFUL'


const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESSFUL}
}

export const initializeApp = () => {
    return dispatch => {
        const promise = dispatch(setUserDataThunk())
        Promise.all([promise])
            .then(responses => {
                dispatch(initializedSuccess())
            })

    }
}