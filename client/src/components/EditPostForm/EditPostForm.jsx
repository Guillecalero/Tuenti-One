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
                console.log(data);
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

            <Form.Group controlId="coasterImage" className="mb-3">
                <Form.Control type="file" onChange={uploadPostImage} />
            </Form.Group>

            <button className="btn btn-primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Enviar'}</button>

        </Form>
    )
}

export default EditPostForm