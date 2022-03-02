import { useContext } from 'react'
import { ReloadContext } from '../../context/loadPage.context'

const PostList = () => {

    const { loadPost } = useContext(ReloadContext)

    return (
        <>
            <h1>lista de posts</h1>
            {
                loadPost.reverse().map(eachPost => {
                    return <div key={eachPost._id}>
                        <p>{eachPost.user}</p>
                        <p>{eachPost.date.slice(0, 10)}</p>
                        <p>{eachPost.status}</p>
                        {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
                        <hr />
                    </div>
                })
            }
        </>
    )
}

export default PostList