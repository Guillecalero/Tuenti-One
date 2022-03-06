import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import EachOwnedPost from "../../components/EachOwnedPost/EachOwnedPost"
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
                <img src={userInfo.imageURL} alt="imagen de usuari@" />
                <div className="profileInfo">
                    <p>{userInfo.nameUser} {userInfo.surnameUser}</p>
                    <p>@{userInfo?.username}</p>
                    <p className="biography"><span>Biografía</span><br />{userInfo.biography} </p>
                    <p><i class="fa-solid fa-cake-candles"></i> {userInfo.birthday?.slice(0, 10)}</p>
                </div>
                <div className="profileEditBtn">
                    <Link to={`/${userInfo?.username}/editar`}>
                        <button className="profileButton">Editar perfil</button>
                    </Link>
                </div>
            </div>
            <div className="profileBodyContainer">
                <EachOwnedPost />
            </div>
        </>
    )
}

export default ProfilePage