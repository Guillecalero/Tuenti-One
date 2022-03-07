import Posteos from "../../components/PostForm/PostForm"
import PostList from "../../components/PostList/PostList"

const HomePage = () => {

    return (
        <div className="homepage minHeight">
            <div className="postContainer">
                <Posteos />
                <hr />
                <PostList />
            </div>
        </div>
    )
}

export default HomePage