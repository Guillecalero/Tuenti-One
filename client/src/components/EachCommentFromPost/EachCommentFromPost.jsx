import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import { PostsContext } from "../../context/posts.context"
import commentServices from "../../services/comment.service"
import posteosService from "../../services/posteos.service"
import userService from "../../services/user.service"

function EachCommentFromPost({ eachComment, postId }) {

    const [oneUser, setOneUser] = useState()
    const { user } = useContext(AuthContext)
    const { refreshPosts } = useContext(PostsContext)

    userService
        .getOneUserById(eachComment.user)
        .then(({ data }) => setOneUser(data.username))

    const delComment = () => {
        posteosService
            .pullOneComment(postId, eachComment._id)
            .then(() => commentServices.removeOneComment(eachComment._id))
            .then(() => refreshPosts())
            .catch(err => console.log(err))
    }


    return <div >
        <p>{eachComment.createdAt.slice(0, 10)}</p>
        <div style={{ border: '1px solid black' }}>
            <p>Username: {oneUser}</p>
            <p><strong>{eachComment.text}</strong></p>
            {eachComment.user && eachComment.user && user?._id === eachComment.user && <button className='btn btn-danger' onClick={delComment}>Eliminar</button>}
            {eachComment.user && eachComment.user && user?._id === eachComment.user && <button className='btn btn-primary'>Editar</button>}
        </div>
    </div>
}

export default EachCommentFromPost