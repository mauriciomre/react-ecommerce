import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ menus, categorias }) => {
    // const categories = ["Mochilas", "Riñoneras", "Gorras"];

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {menus.map((menu) => {
                        return (
                            <Link className="mx-4 navbar-brand" to={menu.href}>
                                {menu.name}
                            </Link>
                        );
                    })}
                    <Nav className="me-auto">
                        {categorias.map((categoria) => {
                            return (
                                <Link className="mx-2 nav-link" to={`/category/${categoria.id}`}>
                                    {categoria.name}
                                </Link>
                            );
                        })}
                    </Nav>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
};

export default NavBar;
