import { useState } from "react"
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate, } from 'react-router-dom'
import userService from "../../services/user.service"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"

const ProfilePageEdit = (userId) => {

    const [ProfilePageEdit, setProfilePageEdit] = useState(
        {
            username: '',
            nameUser: '',
            surnameUser: '',
            imageURL: ''
        }
    )
    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setProfilePageEdit({
            ...ProfilePageEdit,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .ProfilePageEdit(userId, ProfilePageEdit)
            .then(({ data }) => {
                console.log(data, "soy el use nena")
                setUser({
                    ...user,
                    data
                })
                // navigate(`/perfil/${username}`)
            })
            .catch(err => console.log(err))
    }


    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    type='text'
                    required
                    placeholder="Username"
                    name='username'
                    value={ProfilePageEdit.username}
                    onChange={handleInputChange}
                    maxLength='10'
                />
            </InputGroup>

            <Form.Group className='mb-3'>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    type='text'
                    name='nameUser'
                    value={ProfilePageEdit.nameUser}
                    onChange={handleInputChange}
                    placeholder='Introduce tu nombre'
                    maxLength='40'
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                    type='text'
                    name='surnameUser'
                    value={ProfilePageEdit.surnameUser}
                    onChange={handleInputChange}
                    placeholder='Introduce tu apellido'
                    maxLength='40'
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Foto de perfil:</Form.Label>
                <Form.Control
                    type='file'
                    name='imageURL'
                    onChange={handleInputChange}
                    value={ProfilePageEdit.imageURL}
                />
            </Form.Group>

            <Button type='submit' className='btn btn-primary'>Editar</Button>

        </Form>
    )
}

export default ProfilePageEdit