import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import commentServices from "../../services/comment.service"

const EditCommentForm = ({ closeModal, refreshPosts, refreshPrivatePosts, commentId }) => {

    const [editComment, setEditComment] = useState({})

    useEffect(() => {
        commentServices
            .getOneComment(commentId)
            .then(({ data }) => {
                setEditComment(data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = e => {
        const { name, value } = e.target
        setEditComment({
            ...editComment,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        commentServices
            .editOneComment(commentId, editComment)
            .then(() => {
                refreshPosts()
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
                    placeholder="Introduce un texto."
                    value={editComment.text}
                    onChange={handleInputChange}
                    name="text"
                    required
                />
            </Form.Group>

            <button className="postFormBtn" type="submit">Enviar</button>

        </Form>
    )
}

export default EditCommentForm