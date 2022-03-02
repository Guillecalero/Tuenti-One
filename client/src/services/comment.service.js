import axios from 'axios'

class CommentServices {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/comment' })
    }

    addNewComment(info) {
        return this.axios.post('/neww-commentt', info)
    }
}

const commentServices = new CommentServices()

export default commentServices