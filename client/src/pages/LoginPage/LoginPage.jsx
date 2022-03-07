import { Container } from "react-bootstrap"
import LoginForm from "../../components/LoginForm/LoginForm"

const LoginPage = () => {

    return (
        <div className="minHeight">
            <h1>Login</h1>
            <Container>
                <LoginForm />
            </Container>
        </div>
    )
}

export default LoginPage