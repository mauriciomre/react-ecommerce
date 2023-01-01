import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ data }) => {
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct(data, quantity);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <img src={data.img} alt={data.name} srcset="" />
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>${data.price}</Card.Text>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;
