import axios from "axios";

const customAxios = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a6405a7a-9150-4771-b995-d8f3a58999ba'
    }
})

export const follow = (id) => {
    console.log('we are here')
    // toggleFollowingProgress(true, id)
    return customAxios.post(`follow/ `)
}

export const unfollow = (id) => {
    // toggleFollowingProgress(true, id)
    return customAxios.delete(`follow/${id}`)
}

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return customAxios.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => {
        return response.data
    })
}

export const setUserProfile = (id, setUserProfile) => {
    return customAxios.get(`profile/${id}`).then(response => {
        setUserProfile(response.data)
    })
}

export const setUserDataAPI = () => {
    return customAxios.get('auth/me')
}

export const getStatus = (id) => {
    return customAxios.get(`profile/status/${id}`)
}

export const updateStatus = (status) => {
    return customAxios.put(`profile/status`, {status: status})
}

export const authAPI = {
    login(email, password, rememberMe = false) {
        return customAxios.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return customAxios.delete('auth/login')
    }
}