import {dialogsReducer} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {profileReducer} from './profile-reducer'

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'First Post', likes: 25},
                {id: 2, message: 'Second Post', likes: 30}
            ],
            newPostText: ''
        },
        dialogPage: {
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
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Sasha',
                    imgUrl: 'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo'
                },
                {
                    id: 2,
                    name: 'Boris',
                    imgUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'
                },
                {
                    id: 3,
                    name: 'Liza',
                    imgUrl: 'https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY'
                }
            ]
        },

    },
    _callSubscriber() {
        alert('Ooops, i do not have a browser')
    },

    getState() {
        return this._state
    },
    subscribe(subscriber) {
        this._callSubscriber = subscriber
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this.browser(this._state)
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this.browser(this._state)
    // },

    dispatch(action) {//{type: 'what to do'}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state)
    }
}

// export const state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'First Post', likes: 25},
//             {id: 2, message: 'Second Post', likes: 30}
//         ],
//         newPostText: ''
//     },
//     dialogPage: {
//         dialogs: [
//             {
//                 name: 'Boris',
//                 id: 1,
//                 imgUrl: 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg'
//             },
//             {
//                 name: 'Sasha',
//                 id: 2,
//                 imgUrl: 'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs'
//             },
//             {
//                 name: 'Valik',
//                 id: 3,
//                 imgUrl: 'https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc'
//             },
//             {
//                 name: 'Liza',
//                 id: 4,
//                 imgUrl: 'https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0'
//             },
//             {
//                 name: 'Vika',
//                 id: 5,
//                 imgUrl: 'https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts'
//             },
//             {
//                 name: 'Anton',
//                 id: 6,
//                 imgUrl: 'https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc'
//             }
//         ],
//         messages: [
//             {id: 1, message: 'Boris\'s messages'},
//             {id: 2, message: 'Sasha\'s messages'},
//             {id: 3, message: 'Valik\'s messgaes'},
//             {id: 4, message: 'Liza\'s messages'},
//             {id: 5, message: 'Vika\'s messages'},
//             {id: 6, message: 'Anton\'s messages'}
//         ]
//     },
//     sidebar: {
//         friends: [
//             {
//                 id: 1,
//                 name: 'Sasha',
//                 imgUrl: 'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo'
//             },
//             {
//                 id: 2,
//                 name: 'Boris',
//                 imgUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'
//             },
//             {
//                 id: 3,
//                 name: 'Liza',
//                 imgUrl: 'https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY'
//             }
//         ]
//     }
// }
//
// export const addPost = () => {
//     debugger
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likes: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     renderEntireTree(state)
// }
//
// export const subscribe = observer => {
//     renderEntireTree = observer
// }
//
// export const changeNewPostText = (newText) => {
//
//     state.profilePage.newPostText = newText
//     renderEntireTree(state)
// }