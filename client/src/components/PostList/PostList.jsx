import EachPost from "../EachPost/EachPost"

const PostList = ({ loadPost, reloadPage }) => {

    return (
        <>
            <h1>lista de posts</h1>
            {
                loadPost.reverse().map((eachPost, idx) => {
                    return <EachPost key={idx} eachPost={eachPost} reloadPage={reloadPage} />
                })
            }
        </>
    )
}

export default PostList