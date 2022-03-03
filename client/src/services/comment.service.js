import axios from 'axios'

class CommentServices {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/comment' })

        this.axios.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    addNewComment(info) {
        return this.axios.post('/neww-commentt', info)
    }
}

const commentServices = new CommentServices()

export default commentServices