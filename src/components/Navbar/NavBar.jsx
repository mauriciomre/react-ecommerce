import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Cart from "../Cart/Cart";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ menus }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "categorias");

        getDocs(queryCollection).then((res) =>
            setCategorias(res.docs.map((categoria) => ({ id: categoria.id, ...categoria.data() })))
        );
    }, [categorias]);

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
