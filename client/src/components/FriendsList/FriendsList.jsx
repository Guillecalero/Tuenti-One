import { useEffect, useState, useContext } from "react"
import userService from "../../services/user.service"
import FriendsCard from "../FriendsCard/FriendsCard"
import { AuthContext } from "../../context/auth.context"


const FriendsList = () => {

    const { user } = useContext(AuthContext)
    const [userFriends, setUserFriends] = useState([])

    useEffect(() => {
        userService
            .getOneUserById(user?._id)
            .then(({ data }) => setUserFriends(data.friends))
            .catch(err => console.log(err))
    }, [user])

    return (
        <div>
            {
                userFriends?.map((eachFriend) => <FriendsCard eachFriend={eachFriend} />)
            }
        </div>
    )
}

export default FriendsList