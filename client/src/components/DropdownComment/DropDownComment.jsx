import { useContext, useState } from "react"
import { Dropdown, DropdownButton, Form } from "react-bootstrap"
import commentServices from "../../services/comment.service"
import { ReloadContext } from '../../context/loadPage.context'
import posteosService from "../../services/posteos.service"

const DropDownComment = ({ postId }) => {

    const [postComment, setPostComment] = useState({ text: '' })

    const { reloadPage } = useContext(ReloadContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setPostComment({
            ...postComment,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        commentServices
            .addNewComment(postComment)
            .then(({ data }) => {
                return posteosService.editOnePost(postId, { comments: data })
            })
            .then(() => {
                reloadPage()
            })
        setPostComment({ status: '' })
    }

    return (
        <DropdownButton
            variant="outline-secondary"
            title="Comentar"
            id="input-group-dropdown-1"
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Nuevo comentario"
                        value={postComment.status}
                        onChange={handleInputChange}
                        name="text"
                        required
                    />
                </Form.Group>

                <Dropdown.Divider />
                <button className="btn btn-primary" type="submit">Enviar</button>

            </Form>
        </DropdownButton>
    )
}

export default DropDownComment