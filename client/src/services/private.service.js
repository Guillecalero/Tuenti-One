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
}

const privateService = new PrivateService()

export default privateService