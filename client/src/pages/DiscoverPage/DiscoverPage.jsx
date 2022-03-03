import { AuthContext } from '../../context/auth.context'
import { useState, useEffect } from 'react'
import userService from "../../services/user.service"

const DiscoverPage = () => {

    const [discoverPage, setDiscoverPage] = useState([])

    useEffect(() => {
        userService
            .getAllUsers()
            .then(({ data }) => setDiscoverPage(data))
            .catch(err => console.log(err))
    }, [])

    return (

        <>
            {
                discoverPage.map(eachUser => {
                    return <div>

                        <img src={eachUser.imageURL} alt="imagen de usuari@" />
                        <hr />
                        <p>Nombre de usuario: {eachUser.username} </p>
                        <hr />
                        <p>Nombre: {eachUser.nameUser} </p>
                        <hr />

                    </div>
                })
            }
        </>
    )
}

export default DiscoverPage