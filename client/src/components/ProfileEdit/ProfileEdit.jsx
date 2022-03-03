import { useEffect } from "react"
import { useState } from "react"
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import userService from "../../services/user.service"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"

const ProfilePageEdit = (userId) => {

    const [editProfileForm, setEditProfileForm] = useState(
        {
            username: '',
            nameUser: '',
            surnameUser: '',
            email: '',
            imageURL: ''
        }
    )
    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setEditProfileForm({
            ...editProfileForm,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .editProfileUser(userId, editProfileForm)
            .then(({ data }) => {
                console.log(data, "soy el use nena")
                setUser({
                    ...user,
                    data
                })
                navigate('/perfil')
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
                    value={editProfileForm.username}
                    onChange={handleInputChange}
                    maxLength='10'
                />
            </InputGroup>

            <Form.Group className='mb-3'>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    type='text'
                    name='nameUser'
                    value={editProfileForm.nameUser}
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
                    value={editProfileForm.surnameUser}
                    onChange={handleInputChange}
                    placeholder='Introduce tu apellido'
                    maxLength='40'
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email'
                    name='email'
                    value={editProfileForm.email}
                    onChange={handleInputChange}
                    placeholder='Correo electronico'
                    required
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Foto de perfil:</Form.Label>
                <Form.Control
                    type='file'
                    name='imageURL'
                    onChange={handleInputChange}
                    value={editProfileForm.imageURL}
                />
            </Form.Group>

            <Button type='submit' className='btn btn-primary'>Editar</Button>

        </Form>
    )
}

export default ProfilePageEdit