import EachPost from "../EachPost/EachPost"

const PostList = ({ loadPost }) => {

    return (
        <>
            <h1>lista de posts</h1>
            {
                loadPost.reverse().map((eachPost, idx) => {
                    return <EachPost key={idx} eachPost={eachPost} />
                })
            }
        </>
    )
}

export default PostList