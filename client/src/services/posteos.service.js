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
    createOnePost(info) {
        return this.axios.post('/neww-postt', info)
    }
    editOnePost(id, info) {
        return this.axios.put(`/${id}/edit-post`, info)
    }
    deleteOnePost(id) {
        return this.axios.delete(`/${id}/delete-post`)
<<<<<<< HEAD
    }
    addNewComment(id, info) {
        return this.axios.post(`/${id}/push-comment`, info)
=======
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)
    }
    addNewComment(id, info) {
        return this.axios.post(`/${id}/push-comment`, info)
    }
}

const posteosService = new PosteosService()

export default posteosService