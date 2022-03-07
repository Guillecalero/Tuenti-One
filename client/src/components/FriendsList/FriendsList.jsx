import { useContext } from 'react'

const FriendsList = () => {
    const { Friends } = (

        {
            username: '',
            nameUser: '',
            surnameUser: '',
            birthday: ''
        }
    )


    return (
        <div>
            {FriendsList.map((friendsCard) => {
                return (
                    <div className="containerEditProfile">
                        <img className="imgContainer" src={friendsCard.imageURL} alt="imagen de usuari@" />
                        <div>
                            <div className="containerInfo">
                                <p><strong>@</strong> <strong>{friendsCard?.username}</strong></p>
                                <p><strong> </strong><strong>{friendsCard?.nameUser}</strong> </p>
                                <p><strong> </strong> <strong>{friendsCard?.surnameUser} </strong></p>
                                <p><strong>{friendsCard.birthday?.slice(0, 10)}</strong></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList