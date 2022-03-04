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
                            <p>@{eachUser.username} </p>

                            {/* <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={eachUser.imageURL} alt= "imagen de usuari@" />
                                <Card.Body>
                               
                                      <ListGroup className="list-group-flush">
                                    <ListGroupItem>{eachUser.nameUser} {eachUser.surnameUser}</ListGroupItem>
                                    <ListGroupItem>@{eachUser.username}</ListGroupItem>
                                 
                                </ListGroup>
                                </Card.Body>
                            </Card> */}
                        </div>
                        <hr />

                    </div>
                })
            }
        </div>
    )
}

export default DiscoverPage