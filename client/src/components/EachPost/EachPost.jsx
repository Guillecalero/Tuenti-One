import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import posteosService from "../../services/posteos.service"
import userService from "../../services/user.service"
import DropDownComment from "../DropdownComment/DropDownComment"

const EachPost = ({ eachPost, reloadPage }) => {

    const { user } = useContext(AuthContext)
    const [oneUser, setOneUser] = useState()

    const delPost = () => {
        posteosService
            .deleteOnePost(eachPost._id)
            .then(() => {
                reloadPage()
            })
    }



    const findComentUser = (id) => {
        userService
            .getOneUserById(id)
            .then(({ data }) => {
                console.log(data)
                setOneUser(data.username)
            })
    }

    return (
        <div key={eachPost._id}>
            <p>{eachPost.user?.username}</p>
            <p>{eachPost.date.slice(0, 10)}</p>
            <p>{eachPost.status}</p>
            {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
            {eachPost.user && eachPost.user && user?._id === eachPost.user && <button className='btn btn-danger' onClick={delPost}>Eliminar</button>}
            <hr />
            <div>
                {eachPost.comments.map(eachComment => {
                    return <div key={eachComment._id}>
                        <p>{findComentUser(`${eachComment.user}`)}</p>
                        <p>{eachComment.date}</p>
                        <p>{oneUser}</p>
                        <p><strong>{eachComment.text}</strong></p>
                    </div>
                })}
            </div>
            <hr />
            <DropDownComment postId={eachPost._id} reloadPage={reloadPage} />
            <hr />
        </div >
    )
}

export default EachPost