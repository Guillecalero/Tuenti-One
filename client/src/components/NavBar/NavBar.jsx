import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import Footer from "../Footer/Footer"

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
                            {
                                isLoggedIn &&
                                <>
                                    <Link to='/descubrir'>
                                        <p className="nav-link">Descubrir</p>
                                    </Link>
                                    <Link to={`/perfil/${user?.username}`}>
                                        <p className="nav-link">Perfil</p>
                                    </Link>
                                </>
                            }
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Friends</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Posts</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Formuluá</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Salir</NavDropdown.Item>
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
                                        <Nav.Link as='span'>Bienvenid@ {user?.username}</Nav.Link>
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