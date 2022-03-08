import { useState } from "react"
import { Dropdown, DropdownButton, Form } from "react-bootstrap"
import commentServices from "../../services/comment.service"
import posteosService from "../../services/posteos.service"
import privateService from "../../services/private.service"

const DropDownComment = ({ postId, refreshPosts, refreshPrivatePosts }) => {

    const [postComment, setPostComment] = useState({ text: '' })


    const handleInputChange = e => {
        const { name, value } = e.target
        setPostComment({
            ...postComment,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        commentServices
            .addNewComment(postComment)
            .then(({ data }) => {
                posteosService.pushNewComment(postId, data)
                privateService.pushNewComment(postId, data)
            })
            .then(() => {
                setPostComment({ text: '' })
                refreshPosts()
                refreshPrivatePosts()
            })
    }

    return (
        <DropdownButton
            variant="outline-secondary"
            title={<i class="fa-solid fa-comment"></i>}
            id="input-group-dropdown-1"
            className="commentBtn"
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Nuevo comentario"
                        value={postComment.text}
                        onChange={handleInputChange}
                        name="text"
                        maxLength='250'
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