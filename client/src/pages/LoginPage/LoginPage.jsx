import { Container } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"

const LoginPage = () => {

    return (
        <>
            <h1>Login</h1>
            <Container>
                <LoginForm />
            </Container>
        </>
    )
}

export default LoginPage