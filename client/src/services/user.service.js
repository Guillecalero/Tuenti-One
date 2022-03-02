import axios from 'axios'

class UserService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/user' })

    }

    getOneUser(id) {
        return this.axios.get(`/${id}`)
    }

    editProfileUser(id, info) {
        return this.axios.put(`/${id}/edit-profile`, info)
    }

}

const userService = new UserService()

export default userService