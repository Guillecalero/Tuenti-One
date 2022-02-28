import { Button, Form } from 'react-bootstrap'

const RegisterForm = () => {
    return (
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' name='name' placeholder='Introduce tu nombre' />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control type='text' name='surname' placeholder='Introduce tu apellido' />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Usuario:</Form.Label>
                <Form.Control type='text' name='username' placeholder='Nombre de usuario' required />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' name='email' placeholder='Correo electronico' required />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type='password' name='password' placeholder='Contraseña' required />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Foto de perfil:</Form.Label>
                <Form.Control type='file' name='imageURL' />
            </Form.Group>


            <Button type='submit' className='btn btn-primary'>Enviar</Button>
        </Form>
    )
}

export default RegisterForm