import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import BrandLogo from '../assets/BrandLogo.png';

function MenuBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
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
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto ml-5">
                            <Nav.Link  href="/" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link  href="/pricing" style={{ color: 'white' }}>Pricing</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Button href="/login" variant="" style={{ color: 'white' }} >Login</Button>
                            <Button href="/signup" variant="outline-success ml-2" style={{ color: 'white' }}>Signup</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MenuBar;