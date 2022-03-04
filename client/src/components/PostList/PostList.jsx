import EachPost from "../EachPost/EachPost"
import { useContext } from "react"
import { PostsContext } from '../../context/posts.context'

const PostList = () => {

    const { posts } = useContext(PostsContext)

    return (
        <>
            <h1>lista de posts</h1>
            {
                posts.map((eachPost, idx) => {
                    return <EachPost key={idx} eachPost={eachPost} />
                })
            }
        </>
    )
}

export default PostList