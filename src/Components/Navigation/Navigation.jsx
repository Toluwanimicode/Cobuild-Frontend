import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navigation.css";

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            className={`transition-all duration-500 py-3 ${
                scrolled 
                ? "bg-white/95 backdrop-blur-md shadow-sm py-2" 
                : "bg-transparent"
            }`}
        >
            <Container>
                {/* Brand Name */}
                <Navbar.Brand href="#home">
                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
                        scrolled ? "text-orange-400" : "text-white"
                    }`}>
                        Cobuild
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 focus:shadow-none" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* items-center + self-center ensures the vertical balance */}
                    <Nav className="ms-auto flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-8 mt-4 lg:mt-0">
                        {["Home", "Services", "Work", "Skills", "Testimonials"].map((item) => (
                            <Nav.Link 
                                key={item}
                                href={`#${item.toLowerCase()}`} 
                                className={`text-sm font-semibold transition-all hover:text-orange-400 px-2 flex items-center h-full leading-none ${
                                    scrolled ? "text-gray-800" : "text-white"
                                }`}
                                style={{ paddingTop: '0', paddingBottom: '0', alignSelf: 'center' }}
                            >
                                {item}
                            </Nav.Link>
                        ))}
                        
                        {/* Dynamic Contact Button - Aligned with the text */}
                        <Nav.Link 
                            href="#contact" 
                            className={`Contact-button px-6 py-2 rounded-full font-bold text-sm transition-all text-center w-full lg:w-auto mt-2 lg:mt-0 shadow-md  flex items-center justify-center ${
                                scrolled 
                                ? "bg-orange-100 text-black hover:bg-orange-200" 
                                : "bg-orange-400 text-white hover:bg-orange-500"
                            }`}
                            style={{ minHeight: '38px', alignSelf: 'center' }} 
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;