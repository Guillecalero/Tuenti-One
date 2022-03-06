import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../../services/user.service"
import EachOwnedPostList from "../EachOwnedPostList/EachOwnedPostList"

const EachOwnedPost = () => {

    const [ownedPosts, setOwnedPosts] = useState([])
    const { username } = useParams()

    useEffect(() => {
        userService
            .getOneUser(username)
            .then(({ data }) => setOwnedPosts(data.posts))
            .catch(err => console.log(err))
    }, [username])

    return (
        <>
            <h1>Aqui van los posts propiosssssss aaa</h1>
            {ownedPosts.map((eachPost, idx) => <EachOwnedPostList key={idx} eachPost={eachPost} />)}
        </>
    )
}

export default EachOwnedPost