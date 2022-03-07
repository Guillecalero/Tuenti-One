import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import posteosService from "../../services/posteos.service"
import DropDownComment from "../DropdownComment/DropDownComment"
import { PostsContext } from '../../context/posts.context'
import EachCommentFromPost from "../EachCommentFromPost/EachCommentFromPost"
import EditPostForm from "../EditPostForm/EditPostForm"
import { useEffect } from "react"

const EachPost = ({ eachPost }) => {

    const { user } = useContext(AuthContext)
    const { refreshPosts } = useContext(PostsContext)
    const [showModal, setShowModal] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const delPost = () => {
        posteosService
            .deleteOnePost(eachPost._id)
            .then(() => posteosService.pullOneUserPost(eachPost._id))
            .then(() => refreshPosts())
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    const addLike = () => {
        posteosService
            .pushOneUserLike(eachPost._id)
            .then(() => refreshPosts())
            .catch(err => console.log(err))
    }
    const delLike = () => {
        posteosService
            .pullOneUserLike(eachPost._id)
            .then(() => refreshPosts())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        posteosService
            .getOnePost(eachPost._id)
            .then(({ data }) => data.likes.map(elm => elm === user._id ? setIsPressed(true) : setIsPressed(false)))
            .catch(err => console.log(err))
    })

    return (
        <div className="postSection" key={eachPost._id}>
            <div className="p-3">
                <div className="postUserContainer">
                    <div className="postUserInfo">
                        <img src={eachPost.user?.imageURL} alt="profile image" />
                        <div className="postUserSidetext">
                            <Link to={`/perfil/${eachPost.user?.username}`}>
                                <p>{eachPost.user?.nameUser} {eachPost.user?.surnameUser}</p>
                            </Link>
                            <p>@{eachPost.user?.username}</p>
                            <p>{eachPost.date?.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div className="postEditDeleteBtn">
                        {
                            eachPost.user && eachPost.user && user?._id === eachPost.user._id &&
                            <>
                                {eachPost.user && eachPost.user && user?._id === eachPost.user._id && <button className='btnDelEdit' onClick={delPost}>Eliminar</button>}
                                {eachPost.user && eachPost.user && user?._id === eachPost.user._id && <button className='btnDelEdit' onClick={handleModalOpen}>Editar</button>}
                            </>
                        }
                    </div>
                </div>
                <div className="postStatus">
                    <p>{eachPost.status}</p>
                </div>
            </div>
            {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
            <div className="p-3">
                <hr />
                <div className="postBtns">
                    {
                        !isPressed
                            ?
                            <button className="postLikeBtn" onClick={() => addLike()}><i class="fa-solid fa-thumbs-up"></i> Me gusta</button>
                            :
                            <button className="postDislikeBtn" onClick={() => delLike()}><i class="fa-solid fa-thumbs-up"></i> Me gusta</button>
                    }
                    {<DropDownComment postId={eachPost._id} refreshPosts={refreshPosts} />}
                </div>
                <hr />
                <Modal show={showModal} onHide={handleModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Editar post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditPostForm closeModal={handleModalClose} refreshPosts={refreshPosts} postId={eachPost._id} />
                    </Modal.Body>
                </Modal>
                <div>
                    {eachPost.comments?.map(eachComment => <EachCommentFromPost postId={eachPost._id} eachComment={eachComment} key={eachComment._id} />)}
                </div>
            </div>
        </div >
    )
}

export default EachPost