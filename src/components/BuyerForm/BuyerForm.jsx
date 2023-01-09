import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useCartContext } from "../../context/CartContext";

const BuyerForm = ({ cart, total }) => {
    const { addOrder } = useCartContext();

    const nameRef = useRef({ value: "" });
    const surnameRef = useRef({ value: "" });
    const emailRef = useRef({ value: "" });
    const phoneRef = useRef({ value: "" });
    const cpRef = useRef({ value: "" });
    const provinceRef = useRef({ value: "" });
    const cityRef = useRef({ value: "" });
    const streetRef = useRef({ value: "" });
    const numberRef = useRef({ value: "" });

    const order = {
        buyer: {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            cpRef: cpRef.current.value,
            province: provinceRef.current.value,
            city: cityRef.current.value,
            street: streetRef.current.value,
            number: numberRef.current.value,
        },
        items: cart.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        })),
        total: total,
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            addOrder(order);
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Label className="fs-5">Datos de contacto</Form.Label>
                <Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom01">
                    <Form.Control ref={nameRef} required type="text" placeholder="Nombre" />
                    <Form.Control.Feedback type="invalid">Coloca un nombre válido.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Control ref={surnameRef} required type="text" placeholder="Apellido" />
                    <Form.Control.Feedback type="invalid">Coloca un apellido válido.</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Control ref={emailRef} type="email" placeholder="E-Mail" required />
                    <Form.Control.Feedback type="invalid">Coloca un E-Mail válido.</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Control ref={phoneRef} type="phone" placeholder="Teléfono" required />
                    <Form.Control.Feedback type="invalid">Coloca un teléfono válido.</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Label className="fs-5">Datos de envío</Form.Label>
                <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom05">
                    <Form.Control ref={cpRef} type="number" placeholder="C.P" required />
                    <Form.Control.Feedback type="invalid">Coloca un código postal válido.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationCustom06">
                    <Form.Control ref={provinceRef} type="text" placeholder="Provincia" required />
                    <Form.Control.Feedback type="invalid">Coloca una provincia válida.</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom07">
                    <Form.Control ref={cityRef} type="text" placeholder="Ciudad" required />
                    <Form.Control.Feedback type="invalid">Coloca una ciudad válida.</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group className="mb-3" as={Col} md="8" controlId="validationCustom08">
                    <Form.Control ref={streetRef} type="text" placeholder="Calle" required />
                    <Form.Control.Feedback type="invalid">Coloca una calle válida</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom09">
                    <Form.Control ref={numberRef} type="text" placeholder="Nº" required />
                    <Form.Control.Feedback type="invalid">Coloca un número válido</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Button type="submit" className="btn-dark container-fluid" onClick={() => console.log(order)}>
                <p className="my-auto text-center bold">TERMINAR COMPRA</p>
            </Button>
        </Form>
    );
};

export default BuyerForm;
