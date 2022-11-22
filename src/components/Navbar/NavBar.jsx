import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    const categories = ["Mochilas", "Riñoneras", "Gorras", "Bolsos", "Billeteras", "Morrales", "Fitness"];

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        {categories.map((category) => {
                            return <Nav.Link href="#">{category}</Nav.Link>;
                        })}
                    </Nav>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
};

export default NavBar;
