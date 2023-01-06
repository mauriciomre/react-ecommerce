import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { v4 as uuid } from "uuid";

const NavBar = ({ menus }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "categorias");

        getDocs(queryCollection).then((res) =>
            setCategorias(res.docs.map((categoria) => ({ id: categoria.id, ...categoria.data() })))
        );
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home">
                    <Link key={uuid()} className="mx-4 navbar-brand" to={"/"}>
                        MW Shop
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categorias.map((categoria) => {
                            return (
                                <Link key={uuid()} className="mx-2 nav-link" to={`/category/${categoria.id}`}>
                                    {categoria.name}
                                </Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;
