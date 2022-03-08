import axios from 'axios'

class PrivateService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/private' })

        this.axios.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllPosts() {
        return this.axios.get('/')
    }

    getPostById(postId) {
        return this.axios.get(`/getPrivatePost/${postId}`)
    }

    createPost(info) {
        return this.axios.post('/new-private-post', info)
    }

    pushOneUserPrivatePost(postId) {
        return this.axios.put(`/${postId}/push-privatePost-user`)
    }

    pullOneUserPrivatePost(postId) {
        return this.axios.put(`/${postId}/pull-privatePost-user`)
    }

    pushOneUserLike(postId) {
        return this.axios.put(`/${postId}/push-privateLike`)
    }

    pullOneUserLike(postId) {
        return this.axios.put(`/${postId}/pull-privateLike`)
    }

    pushNewComment(postId, info) {
        return this.axios.put(`/${postId}/push-comment-privatePost`, info)
    }

    pullOneComment(postId, commentId) {
        return this.axios.put(`/${postId}/${commentId}/pull-comment-privatePost`)
    }

    editOnePost(id, info) {
        return this.axios.put(`/${id}/edit-privatePost`, info)
    }

    deleteOnePost(id) {
        return this.axios.delete(`/${id}/delete-privatePost`)
    }
}

const privateService = new PrivateService()

export default privateService