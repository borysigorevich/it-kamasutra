const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

const initialState = {
    dialogs: [
        {
            name: 'Boris',
            id: 1,
            imgUrl: 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg'
        },
        {
            name: 'Sasha',
            id: 2,
            imgUrl: 'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs'
        },
        {
            name: 'Valik',
            id: 3,
            imgUrl: 'https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc'
        },
        {
            name: 'Liza',
            id: 4,
            imgUrl: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
        },
        {
            name: 'Vika',
            id: 5,
            imgUrl: 'https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts'
        },
        {
            name: 'Anton',
            id: 6,
            imgUrl: 'https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc'
        }
    ],
    messages: [
        {id: 1, message: 'Boris\'s messages'},
        {id: 2, message: 'Sasha\'s messages'},
        {id: 3, message: 'Valik\'s messgaes'},
        {id: 4, message: 'Liza\'s messages'},
        {id: 5, message: 'Vika\'s messages'},
        {id: 6, message: 'Anton\'s messages'}
    ]
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        // case UPDATE_NEW_TEXT_MESSAGE: {
        //     return {
        //         ...state,
        //         newMessageText: action.newText
        //     }
        // }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText
})

// export const updateNewMessageTextActionCreator = (text) => ({
//     type: UPDATE_NEW_TEXT_MESSAGE,
//     newText: text
// })