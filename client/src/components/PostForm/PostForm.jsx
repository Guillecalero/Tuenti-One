import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import posteosService from "../../services/posteos.service"
import { ReloadContext } from '../../context/loadPage.context'
<<<<<<< HEAD
<<<<<<< HEAD
import uploadService from "../../services/upload.service"
=======
>>>>>>> f194d1e (added comment to be shown)
=======
import uploadService from "../../services/upload.service"
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)

const Posteos = () => {

    const [postStatus, setPostStatus] = useState({
        status: '',
        imageURL: ''
    })

    const { reloadPage } = useContext(ReloadContext)

<<<<<<< HEAD
<<<<<<< HEAD
    const [loadingImage, setLoadingImage] = useState(false)
=======
>>>>>>> f194d1e (added comment to be shown)
=======
    const [loadingImage, setLoadingImage] = useState(false)
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)

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
<<<<<<< HEAD
<<<<<<< HEAD
            .then(() => {
=======
            .then(({ data }) => {
>>>>>>> f194d1e (added comment to be shown)
=======
            .then(() => {
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)
                reloadPage()
            })
            .catch(err => console.log(err))

        setPostStatus({
            status: '',
            imageURL: ''
        })
    }


    return (
        <>
            <h1>Posteooo</h1>
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

                <Form.Group controlId="coasterImage" className="mb-3">
                    <Form.Control type="file" onChange={uploadPostImage} />
                </Form.Group>

                <button className="btn btn-primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Enviar'}</button>

            </Form>
        </>
    )
}

export default Posteos