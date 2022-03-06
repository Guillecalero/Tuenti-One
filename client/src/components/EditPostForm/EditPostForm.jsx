import { useEffect } from "react"
import { useState } from "react"
import { Form } from "react-bootstrap"
import posteosService from "../../services/posteos.service"
import uploadService from "../../services/upload.service"

const EditPostForm = ({ closeModal, refreshPosts, postId }) => {

    const [editPost, setEditPost] = useState({})
    const [loadingImage, setLoadingImage] = useState(false)

    useEffect(() => {
        posteosService
            .getOnePost(postId)
            .then(({ data }) => {
                setEditPost(data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = e => {
        const { name, value } = e.target
        setEditPost({
            ...editPost,
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
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    className="mb-3"
                    type="text"
                    placeholder="¿En qué estás pensando?"
                    value={editPost.status}
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