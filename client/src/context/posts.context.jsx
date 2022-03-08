import { createContext, useEffect } from "react"
import { useState } from "react"
import posteosService from "../services/posteos.service"
import privateService from "../services/private.service"

const PostsContext = createContext()

const PostsWrapper = (props) => {

    const [posts, setPosts] = useState([])
    const [privatePosts, setPrivatePosts] = useState([])

    const refreshPosts = () => {
        posteosService
            .getAllPost()
            .then(({ data }) => setPosts(data))
            .catch(error => console.log(error))
    }

    const refreshPrivatePosts = () => {
        privateService
            .getAllPosts()
            .then(({ data }) => setPrivatePosts(data))
            .catch(error => console.log(error))
    }

    useEffect(() => refreshPosts(), [])
    useEffect(() => refreshPrivatePosts(), [])
    return (
        <PostsContext.Provider value={{ posts, privatePosts, refreshPosts, refreshPrivatePosts }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export { PostsContext, PostsWrapper }