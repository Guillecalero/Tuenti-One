import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"

const NavBar = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (
        <>
            <Navbar className="navBg" expand="lg">
                <Container>
                    <Navbar.Brand>Tuentione</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/home'>
                                <p className="nav-link">Home</p>
                            </Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <div className="loginRegister">
                            {
                                !isLoggedIn ?
                                    <>
                                        <Link to='/'>
                                            <p className="nav-link">Iniciar sesión</p>
                                        </Link>
                                        <Link to='/registro'>
                                            <p className="nav-link">Registro</p>
                                        </Link>

                                    </>
                                    :
                                    <>
                                        <Nav.Link as='span' onClick={logOutUser}>Cerrar sesión</Nav.Link>
                                        <Nav.Link as='span'>Bienvenido {user?.username}</Nav.Link>
                                    </>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar