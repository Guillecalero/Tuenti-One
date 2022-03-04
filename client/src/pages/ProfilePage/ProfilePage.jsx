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
            .then(({ data }) => {
                setUserInfo(data)
            })
            .catch(err => console.log(err))
    }, [username])

    return (
        <div>
            <h3>Nombre de usuario: {userInfo?.username} </h3>
            <img src={userInfo.imageURL} alt="imagen de usuari@" />
            <p>Nombre: {userInfo.nameUser} </p>
            <p>Apellidos: {userInfo.surnameUser} </p>
            <p>Biografía: {userInfo.biography} </p>
            <p>Cumpleaños: {userInfo.birthday?.slice(0, 10)}</p>

            {/* <ProfilePageEdit userId={userInfo._id} /> */}

            <Link to={`/${userInfo.username}/editar`}>
                <p>Editar perfil</p>
            </Link>
        </div>
    )
}

export default ProfilePage