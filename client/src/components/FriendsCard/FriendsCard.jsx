import { useEffect, useState } from "react"
import userService from "../../services/user.service"

const FriendsCard = ({ eachFriend }) => {

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        userService
            .getOneUserById(eachFriend)
            .then(({ data }) => {
                setUserInfo(data)
            })
            .catch(err => console.log(err))
    }, [])

    // return (
    // <>
    //     <img src={userInfo.imageURL}></img>
    //     <p>{userInfo.nameUser}</p>
    //     <p>{userInfo.surnameUser}</p>
    //     <button type="submit">Ver perfil</button>

    // </>

    return (
        <div className='friendsCardContainer'>
            <div className='friendsCardImage'>
                <img src={userInfo.imageURL} alt="imagen de usuari@" />
            </div>

            <div className='friendsCardElem'>
                <p>{userInfo.nameUser} {userInfo.surnameUser} </p>
                <button type="submit">Ver perfil</button>
            </div>
            <hr />
        </div>


    )
}

export default FriendsCard