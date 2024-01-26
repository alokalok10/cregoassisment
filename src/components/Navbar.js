import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <Navbar style={{ backgroundColor: darkMode ? "#333" : "#6A5ACD", marginBottom: "1rem" }}>
                <Container style={{ height: "8vh" }}>
                    <Navbar.Brand style={{ textTransform: "uppercase", fontWeight: "bold", color: darkMode ? "#fff" : "inherit" }}>
                        Expression Engine
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link
                            href="https://github.com/alokalok10"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: darkMode ? "#fff" : "black",
                                textDecoration: "none",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                marginLeft: "20px"
                            }}
                        >
                            GitHub
                        </Nav.Link>
                        <Nav.Link
                            onClick={toggleDarkMode}
                            style={{
                                cursor: "pointer",
                                color: darkMode ? "#fff" : "black",
                                textDecoration: "none",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                marginLeft: "20px"
                            }}
                        >
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
