import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


import BrandLogo from '../assets/BrandLogo.png';

function MenuBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={BrandLogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            YT Analytics
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ml-5">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
                            </Link>
                            <Link to="/pricing" style={{ textDecoration: "none" }}>
                                <Nav.Link href="/pricing" style={{ color: 'white' }}>Pricing</Nav.Link>
                            </Link>
                        </Nav>
                        <Form className="d-flex">
                            <Link to="/login">
                                <Button variant="outline-success" className="ml-5" style={{ color: 'white' }} >Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="outline-success ml-2" style={{ color: 'white' }}>Signup</Button>
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MenuBar;