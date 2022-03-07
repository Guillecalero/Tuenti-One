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

        <div className='discoverContainer'>
            {
                discoverPage.map(eachUser => {

                    return <div className='discoverElm' key={eachUser._id}>
                        <img src={eachUser.imageURL} alt="imagen de usuari@" />
                        <div className='discoverSidetext'>
                            <p>{eachUser.nameUser} {eachUser.surnameUser} </p>
                            <button>Añadir</button>
                        </div>
                        <hr />

                    </div>
                })
            }
        </div>
    )
}

export default DiscoverPage