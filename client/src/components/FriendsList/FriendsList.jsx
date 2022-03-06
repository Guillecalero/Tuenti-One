import FriendsCard from '../FriendsCard/FriendsCard'
import { useContext } from 'react'

const FriendsList = ({ FriendsCard }) => {

    return (
        <>
            <div className="containerEditProfile">
                <img className="imgContainer" src={FriendsCard.imageURL} alt="imagen de usuari@" />
                <div>
                    <div className="containerInfo">
                        <p><strong>@</strong> <strong>{FriendsCard?.username}</strong></p>
                        <p><strong> </strong><strong>{FriendsCard.nameUser}</strong> </p>
                        <p><strong> </strong> <strong>{FriendsCard.surnameUser} </strong></p>
                        <p><strong>{FriendsCard.birthday?.slice(0, 10)}</strong></p>
                    </div>
                </div>
            </div>
            <h5 className="biography"><strong> Biografía:</strong> {FriendsCard.biography} </h5>
        </>
    )

}

export default FriendsList