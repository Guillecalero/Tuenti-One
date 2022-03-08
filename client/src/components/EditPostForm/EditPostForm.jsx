import { useContext, useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { PostsContext } from "../../context/posts.context"
import posteosService from "../../services/posteos.service"
import privateService from "../../services/private.service"
import uploadService from "../../services/upload.service"

const EditPostForm = ({ closeModal, postId }) => {

    const [editPost, setEditPost] = useState({})
    const [editPrivatePost, setEditPrivatePost] = useState({})
    const [loadingImage, setLoadingImage] = useState(false)
    const { refreshPosts, refreshPrivatePosts } = useContext(PostsContext)

    useEffect(() => {
        posteosService
            .getOnePost(postId)
            .then(({ data }) => setEditPost(data))
            .catch(err => console.log(err))

        privateService
            .getPostById(postId)
            .then(({ data }) => setEditPrivatePost(data))
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = e => {
        const { name, value } = e.target
        setEditPost({
            ...editPost,
            [name]: value
        })

        setEditPrivatePost({
            ...editPrivatePost,
            [name]: value
        })
    }

    const uploadPostImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageURL', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setEditPost({ ...editPost, imageURL: data.cloudinary_url })
                setEditPrivatePost({ ...editPrivatePost, imageURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        posteosService
            .editOnePost(postId, editPost)
            .then(() => {
                refreshPosts()
                closeModal()
            })
            .catch(err => console.log(err))
        privateService
            .editOnePost(postId, editPrivatePost)
            .then(() => {
                refreshPrivatePosts()
                closeModal()
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    className="mb-3"
                    type="text"
                    placeholder="¿En qué estás pensando?"
                    value={editPost !== null ? editPost.status : editPrivatePost.status}
                    onChange={handleInputChange}
                    name="status"
                    required
                />
            </Form.Group>

            <div className="postFormBtns">
                <Form.Group controlId="postImage" className="mb-3 postUploadImage">
                    <label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Subir foto</label>
                    <input id="file-upload" type="file" onChange={uploadPostImage} />
                </Form.Group>

                <button className="postFormBtn" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Enviar'}</button>
            </div>

        </Form>
    )
}

export default EditPostForm