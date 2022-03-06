import { useEffect } from "react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { PostsContext } from "../../context/posts.context"
import commentServices from "../../services/comment.service"
import posteosService from "../../services/posteos.service"
import userService from "../../services/user.service"

function EachCommentFromPost({ eachComment, postId }) {

    const [oneUser, setOneUser] = useState()
    const { user } = useContext(AuthContext)
    const { refreshPosts } = useContext(PostsContext)

    useEffect(() => {
        userService
            .getOneUserById(eachComment.user)
            .then(({ data }) => setOneUser(data))
            .catch(err => console.log(err))
    }, [])

    const delComment = () => {
        posteosService
            .pullOneComment(postId, eachComment._id)
            .then(() => commentServices.removeOneComment(eachComment._id))
            .then(() => refreshPosts())
            .catch(err => console.log(err))
    }

    return <div className="eachComment">
        <div className="commentUserInfo">
            <img src={oneUser?.imageURL} alt="profile image" />
            <div className="commentUserSidetext">
                <Link to={`/perfil/${oneUser?.username}`}>
                    <p className="knfe1">{oneUser?.nameUser} {oneUser?.surnameUser}</p>
                </Link>
                <p className="knfe2">{eachComment.createdAt.slice(0, 10)}</p>
                <div>
                    <p>{eachComment.text}</p>
                </div>
            </div>
        </div>
        {eachComment.user && eachComment.user && user?._id === eachComment.user && <button className='btnDelEdit' onClick={delComment}>Eliminar</button>}
        {eachComment.user && eachComment.user && user?._id === eachComment.user && <button className='btnDelEdit'>Editar</button>}
    </div>
}

export default EachCommentFromPost