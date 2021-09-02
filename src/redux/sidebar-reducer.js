const initialState = {
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
}

export const sidebarReducer = (state = initialState, action) => {

    return state
}