import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import posteosService from "../../services/posteos.service"
import { ReloadContext } from '../../context/loadPage.context'

const Posteos = () => {

    const [postStatus, setPostStatus] = useState({
        status: '',
        imageURL: ''
    })

    const { reloadPage } = useContext(ReloadContext)


    const handleInputChange = e => {
        const { name, value } = e.target

        setPostStatus({
            ...postStatus,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        posteosService
            .createOnePost(postStatus)
            .then(({ data }) => {
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
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="¿En qué estás pensando?"
                        value={postStatus.status}
                        onChange={handleInputChange}
                        name="status"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        className="mb-3"
                        type="file"
                        value={postStatus.imageURL}
                        onChange={handleInputChange}
                        name="imageURL"
                    />
                </Form.Group>

                <button className="btn btn-danger" type="submit">Publicar</button>

            </Form>
        </>
    )
}

export default Posteos