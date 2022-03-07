import axios from 'axios'

class PosteosService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/post' })

        this.axios.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllPost() {
        return this.axios.get('/')
    }

    getOnePost(id) {
        return this.axios.get(`/onePost/${id}`)
    }

    createOnePost(info) {
        return this.axios.post('/neww-postt', info)
    }

    editOnePost(id, info) {
        return this.axios.put(`/${id}/edit-post`, info)
    }

    deleteOnePost(id) {
        return this.axios.delete(`/${id}/delete-post`)
    }

    pushNewComment(id, info) {
        return this.axios.put(`/${id}/push-comment-post`, info)
    }

    pullOneComment(postId, commentId) {
        return this.axios.put(`/${postId}/${commentId}/pull-comment-post`)
    }

    pushOneUserLike(postId, userId) {
        return this.axios.put(`/${postId}/${userId}/push-like`)
    }

    pullOneUserLike(postId, userId) {
        return this.axios.put(`/${postId}/${userId}/pull-like`)
    }

    pushOneUserPost(userId, postId) {
        return this.axios.put(`/${userId}/${postId}/push-post-user`)
    }

    pullOneUserPost(userId, postId) {
        return this.axios.put(`/${userId}/${postId}/pull-post-user`)
    }
}

const posteosService = new PosteosService()

export default posteosService