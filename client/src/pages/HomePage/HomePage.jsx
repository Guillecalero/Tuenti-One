import Posteos from "../../components/PostForm/PostForm"
import PostList from "../../components/PostList/PostList"

const HomePage = () => {

    return (
        <>
            <h1>Homepage</h1>
            <Posteos />
            <hr />
            <PostList />
        </>
    )
}

export default HomePage