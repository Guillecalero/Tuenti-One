import axios from 'axios'

class UserService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/user' })

    }

    getOneUserById(id) {
        return this.axios.get(`/${id}`)
    }

    getOneUser(username) {
        return this.axios.get(`/${username}`)
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