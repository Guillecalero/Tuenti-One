import { useContext } from "react"
import Posteos from "../../components/PostForm/PostForm"
import PostList from "../../components/PostList/PostList"
import { ReloadContext } from '../../context/loadPage.context'

const HomePage = () => {

    const { loadPost, reloadPage } = useContext(ReloadContext)

    return (
        <>
            <h1>Homepage</h1>
            <Posteos />
            <hr />
            <PostList loadPost={loadPost} reloadPage={reloadPage} />
        </>
    )
}

export default HomePage