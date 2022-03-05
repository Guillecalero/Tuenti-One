import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import posteosService from "../../services/posteos.service"
import DropDownComment from "../DropdownComment/DropDownComment"
import { PostsContext } from '../../context/posts.context'
import EachCommentFromPost from "../EachCommentFromPost/EachCommentFromPost"
import { Dropdown, DropdownButton, Modal } from "react-bootstrap"
import EditPostForm from "../EditPostForm/EditPostForm"

const EachPost = ({ eachPost }) => {

    const { user } = useContext(AuthContext)
    const { refreshPosts } = useContext(PostsContext)
    const [showModal, setShowModal] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const delPost = () => {
        posteosService
            .deleteOnePost(eachPost._id)
            .then(() => refreshPosts())
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    return (
        <div className="postSection" key={eachPost._id}>
            <div className="postUserContainer">
                <div className="postUserInfo">
                    <img src={eachPost.user?.imageURL} alt="profile image" />
                    <div>
                        <p>{eachPost.user?.nameUser} {eachPost.user?.surnameUser}</p>
                        <p>@{eachPost.user?.username}</p>
                        <p>{eachPost.date.slice(0, 10)}</p>
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
            <hr />
            <p>{eachPost.status}</p>
            {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
            <hr />
            <div>
                {eachPost.comments.map(eachComment => <EachCommentFromPost postId={eachPost._id} eachComment={eachComment} key={eachComment._id} />)}
            </div>
            <hr />
            <div className="postBtns">
                {
                    !isPressed
                        ?
                        <button className="postLikeBtn" onClick={() => setIsPressed(true)}><i class="fa-solid fa-thumbs-up"></i> Me gusta</button>
                        :
                        <button className="postDislikeBtn" onClick={() => setIsPressed(false)}><i class="fa-solid fa-thumbs-up"></i> Me gusta</button>
                }
                {<DropDownComment postId={eachPost._id} refreshPosts={refreshPosts} />}
            </div>
            <hr />
            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPostForm closeModal={handleModalClose} refreshPosts={refreshPosts} postId={eachPost._id} />
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default EachPost