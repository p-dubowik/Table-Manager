import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
    return(
        <Navbar expand="lg" bg="primary" variant="dark">
            <Container fluid>

            <Navbar.Brand as={NavLink} to='/' >Waiter.app</Navbar.Brand>

            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;