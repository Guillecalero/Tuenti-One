import { useEffect } from "react"
import { useState } from "react"
import commentServices from "../../services/comment.service"
import posteosService from "../../services/posteos.service"
import userService from "../../services/user.service"
import EachPost from "../EachPost/EachPost"

const EachOwnedPostList = ({ eachPost }) => {

    const [allPosts, setAllPosts] = useState([])
    const [newComments, setNewComments] = useState()
    const [newUser, setNewUser] = useState()

    let info

    useEffect(() => {
        posteosService
            .getOnePost(eachPost)
            .then((allpost) => {
                info = allpost.data
                setAllPosts(allpost.data)
                const idsComments = allpost.data.comments
                let allcomments = idsComments.map(eachComment => commentServices.getOneComment(eachComment))
                return Promise.all(allcomments)
            })
            .then((data) => {
                const datos = data.map(elm => elm.data)
                setNewComments(datos)
                const idUser = info.user
                return userService.getOneUserById(idUser)
            })
            .then(({ data }) => {
                setNewUser(data)
            })
            .catch(err => console.log(err))
    }, [])
    const newInfo = { ...allPosts, comments: newComments, user: newUser }

    return (
        <EachPost eachPost={newInfo} />
    )
}

export default EachOwnedPostList