import { useState } from "react"
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import userService from "../../services/user.service"


const ProfilePageEdit = () => {

    const [registerForm, setRegisterForm] = useState(
        {
            username: '',
            nameUser: '',
            surnameUser: '',
            email: '',
            password: '',
            imageURL: ''
        }
    )

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setRegisterForm({
            ...registerForm,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        //TODO coger del contexto de Auth el objeto usuario y coger su id
        userService
            .editProfileUser(registerForm)
            .then(() => {
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
                    value={registerForm.username}
                    onChange={handleInputChange}
                    maxLength='10'
                />
            </InputGroup>

            <Form.Group className='mb-3'>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    type='text'
                    name='nameUser'
                    value={registerForm.nameUser}
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
                    value={registerForm.surnameUser}
                    onChange={handleInputChange}
                    placeholder='Introduce tu apellido'
                    maxLength='40'
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email'
                    name='email'
                    value={registerForm.email}
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
                    value={registerForm.imageURL}
                />
            </Form.Group>

            <Button type='submit' className='btn btn-primary'>Editar</Button>

        </Form>
    )
}

export default ProfilePageEdit