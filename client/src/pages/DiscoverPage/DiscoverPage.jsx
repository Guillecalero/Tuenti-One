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

    const addFriend = (eachUser_id) => {
        userService
            .addFriend(eachUser_id)
            .then(({ data }) => console.log(data, "soy el friend"))
    }

    return (

        <div className='discoverContainer'>
            {
                discoverPage.map(eachUser => {

                    return <div className='discoverElm' key={eachUser._id}>
                        <img src={eachUser.imageURL} alt="imagen de usuari@" />
                        <div className='discoverSidetext'>
                            <p>{eachUser.nameUser} {eachUser.surnameUser} </p>

                            {/* TODO add onClick que llame a addFriend pasandole eachUser._id */}
                            <button onClick={() => addFriend(eachUser._id)}>Añadir</button>
                        </div>
                        <hr />

                    </div>
                })
            }
        </div>
    )
}

export default DiscoverPage