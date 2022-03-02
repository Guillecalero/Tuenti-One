import posteosService from "../../services/posteos.service"

const EachPost = ({ eachPost, reloadPage }) => {


    const delPost = () => {
        posteosService
            .deleteOnePost(eachPost._id)
            .then(() => {
                reloadPage()
            })
    }

    return (
        <div key={eachPost._id}>
            <p>{eachPost.user}</p>
            <p>{eachPost.date.slice(0, 10)}</p>
            <p>{eachPost.status}</p>
            {eachPost.imageURL !== '' ? <img src={eachPost.imageURL} alt='post image' /> : <p></p>}
            <button className='btn btn-danger' onClick={delPost}>Eliminar</button>
            <hr />
        </div>
    )
}

export default EachPost