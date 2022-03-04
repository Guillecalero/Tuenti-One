import { useState } from "react"
import userService from "../../services/user.service"

function EachCommentFromPost({ eachComment }) {

    const [oneUser, setOneUser] = useState()

    userService
        .getOneUserById(eachComment.user)
        .then(({ data }) => setOneUser(data.username))


    return <div >
        <p>{eachComment.date}</p>
        <div style={{ border: '1px solid black' }}>
            <p>Username: {oneUser}</p>
            <p><strong>{eachComment.text}</strong></p>
        </div>
    </div>
}

export default EachCommentFromPost