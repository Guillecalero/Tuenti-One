import { createContext, useEffect } from "react"
import { useState } from "react"
import posteosService from "../services/posteos.service"

const PostsContext = createContext()

const PostsWrapper = (props) => {

    const [posts, setPosts] = useState([])

    const refreshPosts = () => {
        posteosService
            .getAllPost()
            .then(({ data }) => setPosts(data))
            .catch(error => console.log(error))
    }

    useEffect(() => refreshPosts(), [])
    return (
        <PostsContext.Provider value={{ posts, refreshPosts }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export { PostsContext, PostsWrapper }