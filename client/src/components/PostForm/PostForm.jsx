import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import posteosService from "../../services/posteos.service"
import { PostsContext } from '../../context/posts.context'
import uploadService from "../../services/upload.service"
import { AuthContext } from "../../context/auth.context"

const Posteos = () => {

    const [postStatus, setPostStatus] = useState({
        status: '',
        imageURL: ''
    })

    const { refreshPosts } = useContext(PostsContext)
    const [loadingImage, setLoadingImage] = useState(false)
    const { user } = useContext(AuthContext)

    const handleInputChange = e => {
        const { name, value } = e.target

        setPostStatus({
            ...postStatus,
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
                setPostStatus({ ...postStatus, imageURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        posteosService
            .createOnePost(postStatus)
            .then(({ data }) => posteosService.pushOneUserPost(data._id))
            .then(() => refreshPosts())
            .catch(err => console.log(err))

        setPostStatus({
            status: '',
            imageURL: ''
        })
    }


    return (
        <div className="postForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="¿En qué estás pensando?"
                        value={postStatus.status}
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
        </div>
    )
}

export default Posteos