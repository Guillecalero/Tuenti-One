import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import posteosService from "../../services/posteos.service"
import DropDownComment from "../DropdownComment/DropDownComment"


const EachPost = ({ eachPost, reloadPage }) => {


    const { user } = useContext(AuthContext)

    const delPost = () => {
        posteosService
            .deleteOnePost(eachPost._id)
            .then(() => {
                reloadPage()
            })
    }

    return (
        <div key={eachPost._id}>
            <p>post id: {eachPost._id}</p>
            <p>{eachPost.user.username}</p>
            <p>{eachPost.date.slice(0, 10)}</p>
            <p>{eachPost.status}</p>
            {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
            {eachPost.user && eachPost.user && user?._id === eachPost.user && <button className='btn btn-danger' onClick={delPost}>Eliminar</button>}
            <hr />
            <div>
                {eachPost.comments.map(eachComment => {
                    return <div key={eachComment._id}>
                        <p>{eachComment.text}</p>
                    </div>
                })}
            </div>
            <hr />
            <DropDownComment postId={eachPost._id} reloadPage={reloadPage} />
            <hr />
        </div>
    )
}

export default EachPost