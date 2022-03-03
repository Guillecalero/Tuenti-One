<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 85ec906 (comments)
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import posteosService from "../../services/posteos.service"
import DropDownComment from "../DropdownComment/DropDownComment"

<<<<<<< HEAD
=======
import posteosService from "../../services/posteos.service"
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)
=======
>>>>>>> 85ec906 (comments)

const EachPost = ({ eachPost, reloadPage }) => {


<<<<<<< HEAD
<<<<<<< HEAD
    const { user } = useContext(AuthContext)

=======
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)
=======
    const { user } = useContext(AuthContext)

>>>>>>> 85ec906 (comments)
    const delPost = () => {
        posteosService
            .deleteOnePost(eachPost._id)
            .then(() => {
                reloadPage()
            })
    }

    return (
        <div key={eachPost._id}>
<<<<<<< HEAD
<<<<<<< HEAD
            <p>post id: {eachPost._id}</p>
=======
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)
=======
            <p>post id: {eachPost._id}</p>
>>>>>>> 85ec906 (comments)
            <p>{eachPost.user}</p>
            <p>{eachPost.date.slice(0, 10)}</p>
            <p>{eachPost.status}</p>
            {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 85ec906 (comments)
            {eachPost.user && eachPost.user && user?._id === eachPost.user && <button className='btn btn-danger' onClick={delPost}>Eliminar</button>}
            <hr />
            <div>
                <p>{eachPost.comments.map(elm => elm.text)}</p>
            </div>
            <hr />
            <DropDownComment postId={eachPost._id} />
<<<<<<< HEAD
=======
            <button className='btn btn-danger' onClick={delPost}>Eliminar</button>
>>>>>>> dada5d8 (added cloudinary and fixed delete post button)
=======
>>>>>>> 85ec906 (comments)
            <hr />
        </div>
    )
}

export default EachPost