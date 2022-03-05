import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import ProfilePageEdit from "../../components/ProfileEdit/ProfileEdit"
import userService from "../../services/user.service"

const ProfilePage = () => {

    const { username } = useParams()

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        userService
            .getOneUser(username)
            .then(({ data }) => setUserInfo(data))
            .catch(err => console.log(err))
    }, [username])

    return (
        <>
            <div className="containerEditProfile">

                <img className="imgContainer" src={userInfo.imageURL} alt="imagen de usuari@" />
                <div>
                    <div className="containerInfo">
                        <p><strong>@</strong> <strong>{userInfo?.username}</strong></p>
                        <p><strong> </strong><strong>{userInfo.nameUser}</strong> </p>
                        <p><strong> </strong> <strong>{userInfo.surnameUser} </strong></p>
                        <p><strong>{userInfo.birthday?.slice(0, 10)}</strong></p>
                        <Link to={`/${userInfo.username}/editar`}>
                            <button className="profileButton"><strong>Editar perfil</strong></button>
                        </Link>
                    </div>
                </div>
            </div>
            <h5 className="biography"><strong> Biografía:</strong> {userInfo.biography} </h5>
        </>
    )
}

export default ProfilePage