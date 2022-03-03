import axios from 'axios'

class UserService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/user' })

        this.axios.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getOneUserById(id) {
        return this.axios.get(`/getUserById/${id}`)
    }

    getOneUser(username) {
        return this.axios.get(`/getUser/${username}`)
    }

    editProfileUser(id, info) {
        return this.axios.put(`/${id}/edit-profile`, info)
    }

    getAllUsers() {
        return this.axios.get('/')
    }

}

const userService = new UserService()

export default userService