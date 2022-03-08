import PrivatePostForm from '../../components/PrivatePostForm/PrivatePostForm'
import PrivatePostList from '../../components/PrivatePostList/PrivatePostList'

const PrivatePage = () => {
    return (
        <div className="privateContainer">
            <h1>Zona privada general</h1>
            <PrivatePostForm />
            <PrivatePostList />
        </div>
    )
}

export default PrivatePage