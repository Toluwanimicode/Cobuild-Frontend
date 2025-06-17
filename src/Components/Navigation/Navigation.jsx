import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import "./Navigation.css";

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar-transparent">
            <Container>
                {/* Brand (Logo) on the left */}
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <Image src="./images/logo-light.png" style={{ height: '40px', width: 'auto' }} />
                </Navbar.Brand>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Nav links on the right */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-link d-flex align-items-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#work">Work</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#map">Map</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;



