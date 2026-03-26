import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import "./Navigation.css";

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar-transparent px-4 md:px-10 py-3">
            <Container fluid>

                {/* Logo */}
                <Navbar.Brand href="#home" className="flex items-center">
                    <Image 
                        src="./images/logo-light.png" 
                        className="h-8 md:h-10 w-auto"
                    />
                </Navbar.Brand>

                {/* Toggle */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">

                        <Nav.Link href="#home" className="text-sm md:text-base">
                            Home
                        </Nav.Link>

                        <Nav.Link href="#services" className="text-sm md:text-base">
                            Services
                        </Nav.Link>

                        <Nav.Link href="#work" className="text-sm md:text-base">
                            Work
                        </Nav.Link>

                        <Nav.Link href="#skills" className="text-sm md:text-base">
                            Skills
                        </Nav.Link>

                        <Nav.Link href="#testimonials" className="text-sm md:text-base">
                            Testimonials
                        </Nav.Link>

                        <Nav.Link href="#contact" className="text-sm md:text-base">
                            Contact
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;



