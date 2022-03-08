import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import privateService from "../../services/private.service"
import DropDownComment from "../DropdownComment/DropDownComment"
import { PostsContext } from '../../context/posts.context'
import EachPrivateCommentFromPost from "../EachPrivateCommentFromPost/EachPrivateCommentFromPost"
import EditPostForm from "../EditPostForm/EditPostForm"
import { useEffect } from "react"
import commentServices from "../../services/comment.service"

const EachPrivatePostCard = ({ privatePostInfo }) => {

    const { user } = useContext(AuthContext)
    const { refreshPrivatePosts, refreshPosts } = useContext(PostsContext)
    const [showModal, setShowModal] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

    const delPost = () => {
        privateService
            .pullOneUserPrivatePost(privatePostInfo._id)
            .then(() => {
                privatePostInfo.comments.map(eachComment => commentServices.removeOneComment(eachComment._id))

                return privateService.deleteOnePost(privatePostInfo._id)
            })
            .then(() => refreshPrivatePosts())
            .catch(err => console.log(err))
        refreshPrivatePosts()
    }

    const handleModalClose = () => setShowModal(false)
    const handleModalOpen = () => setShowModal(true)

    const addLike = () => {
        setIsPressed(true)
        privateService
            .pushOneUserLike(privatePostInfo._id)
            .then(() => refreshPrivatePosts())
            .catch(err => console.log(err))
    }
    const delLike = () => {
        setIsPressed(false)
        privateService
            .pullOneUserLike(privatePostInfo._id)
            .then(() => refreshPrivatePosts())
            .catch(err => console.log(err))
    }

    return (
        <div className="postSection" key={privatePostInfo._id}>
            <div className="p-3">
                <div className="postUserContainer">
                    <div className="postUserInfo">
                        <img src={privatePostInfo.user?.imageURL} alt="profile image" />
                        <div className="postUserSidetext">
                            <Link to={`/perfil/${privatePostInfo.user?.username}`}>
                                <p>{privatePostInfo.user?.nameUser} {privatePostInfo.user?.surnameUser}</p>
                            </Link>
                            <p>@{privatePostInfo.user?.username}</p>
                            <p>{privatePostInfo.date?.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div className="postEditDeleteBtn">
                        {
                            privatePostInfo.user && privatePostInfo.user && user?._id === privatePostInfo.user._id &&
                            <>
                                {privatePostInfo.user && privatePostInfo.user && user?._id === privatePostInfo.user._id && <button className='btnDelEdit' onClick={delPost}>Eliminar</button>}
                                {privatePostInfo.user && privatePostInfo.user && user?._id === privatePostInfo.user._id && <button className='btnDelEdit' onClick={handleModalOpen}>Editar</button>}
                            </>
                        }
                    </div>
                </div>
                <div className="postStatus">
                    <p>{privatePostInfo.status}</p>
                </div>
            </div>
            {privatePostInfo.imageURL !== '' ? <img src={privatePostInfo.imageURL} alt='post image' /> : <p></p>}
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
                    {<DropDownComment postId={privatePostInfo._id} refreshPosts={refreshPosts} refreshPrivatePosts={refreshPrivatePosts} />}
                </div>
                <hr />
                <Modal show={showModal} onHide={handleModalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Editar post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditPostForm closeModal={handleModalClose} refreshPrivatePosts={refreshPrivatePosts} postId={privatePostInfo._id} />
                    </Modal.Body>
                </Modal>
                <div>
                    {privatePostInfo.comments?.map(eachComment => <EachPrivateCommentFromPost postId={privatePostInfo._id} eachComment={eachComment} key={eachComment._id} />)}
                </div>
            </div>
        </div >
    )
}

export default EachPrivatePostCard