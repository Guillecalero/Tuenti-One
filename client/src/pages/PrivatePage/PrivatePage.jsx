import { useParams } from "react-router-dom"
import PrivatePostForm from '../../components/PrivatePostForm/PrivatePostForm'
import PrivatePostList from '../../components/PrivatePostList/PrivatePostList'

const PrivatePage = () => {
    const { username } = useParams()
    return (
        <div className="privateContainer">
            <h1>Zona privada de {username}</h1>
            <PrivatePostForm />
            <PrivatePostList />
        </div>
    )
}

export default PrivatePage