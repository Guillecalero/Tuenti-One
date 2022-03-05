import { useState, useContext, useEffect } from "react"
import { Form, InputGroup } from 'react-bootstrap'
import { useNavigate, useParams, } from 'react-router-dom'
import userService from "../../services/user.service"
import { AuthContext } from "../../context/auth.context"
import uploadService from "../../services/upload.service"

const ProfilePageEdit = () => {

    const { username } = useParams()

    const [ProfilePageEdit, setProfilePageEdit] = useState({})
    const [loadingImage, setLoadingImage] = useState(false)

    useEffect(() => {
        userService
            .getOneUser(username)
            .then(({ data }) => setProfilePageEdit(data))
            .catch(err => console.log(err))
    }, [username])

    const { user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setProfilePageEdit({
            ...ProfilePageEdit,
            [name]: value
        })
    }

    const uploadPostImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageURL', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProfilePageEdit({ ...ProfilePageEdit, imageURL: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .editProfileUser(username, ProfilePageEdit)
            .then(({ data }) => setUser({ ...user, data }))
            .catch(err => console.log(err))

        navigate(`/perfil/${username}`)
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
                <Form.Label><strong>Nombre:</strong></Form.Label>
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
                <Form.Label><strong>Apellido:</strong></Form.Label>
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
                <Form.Label><strong>Biografía:</strong></Form.Label>
                <Form.Control
                    type='text'
                    name='biography'
                    value={ProfilePageEdit.biography}
                    onChange={handleInputChange}
                    placeholder='Introduce tu biografía'
                    maxLength='250'
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label><strong>Foto de perfil:</strong></Form.Label>
                <Form.Control
                    type='file'
                    name='imageURL'
                    onChange={uploadPostImage}
                />
            </Form.Group>

            <button className="editProfileButton" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Enviar'}</button>

        </Form>
    )
}

export default ProfilePageEdit