import { useContext } from "react"
import { PostsContext } from "../../context/posts.context"
import EachPrivatePost from '../../components/EachPrivatePost/EachPrivatePost'

const PrivatePostList = () => {

    const { privatePosts } = useContext(PostsContext)

    return (
        <>
            <h1>Lista de post privados</h1>
            {privatePosts?.map((eachPrivatePost, idx) => <EachPrivatePost key={idx} eachPrivatePost={eachPrivatePost} />)}
        </>
    )
}

export default PrivatePostList