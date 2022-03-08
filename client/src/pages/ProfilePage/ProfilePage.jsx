import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import EachOwnedPost from "../../components/EachOwnedPost/EachOwnedPost"
import PostForm from "../../components/PostForm/PostForm"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"

const ProfilePage = () => {

    const { username } = useParams()

    const [userInfo, setUserInfo] = useState({})
    const { user } = useContext(AuthContext)

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
                        {username && username && user?.username === username && <button className="profileButton">Editar perfil</button>}
                    </Link>
                    <Link to={`/${userInfo?.username}/privado`}>
                        <button className="profilePrivateButton">Zona Privada</button>
                    </Link>
                </div>
            </div>
            <div className="mobileProfilePage profileBodyContainer row">
                <div className="col-5">
                </div>
                <div className="mobileProfilePage col-7">
                    <PostForm />
                    <hr />
                    <EachOwnedPost />
                </div>

                {/* 
                TODO pasarle a friends card EACH de los friends
                {userInfo.friends.length > 0 &&
                    userInfo.friends.map(friend => {
                        <FriendsCard friend={friend} key={friend._id} />
                    })
                } */}

            </div>
        </>
    )
}

export default ProfilePage