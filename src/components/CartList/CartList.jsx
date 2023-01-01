import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemRemoveIcon from "../icons/ItemRemoveIcon";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

const CartList = () => {
    const { removeProduct, cart, total } = useCartContext();

    let result;
    if (cart.length) {
        result = cart
            .map((producto) => {
                return (
                    <div className="containe text-center border-light-subtle mb-2 p-3">
                        <div className="row">
                            <Link className="nav-link col-4" to={`/item/${producto.id}`}>
                                <img className="img" src={producto.img} />
                            </Link>

                            <div className="col-8 detail-item-container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>{producto.name}</div>
                                    <button className="hiddenBtn" onClick={() => removeProduct(producto.id)}>
                                        <ItemRemoveIcon />
                                    </button>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Badge className="me-1" pill bg="light" text="secondary">
                                            ${producto.price}
                                        </Badge>
                                        <Badge pill bg="light" text="secondary">
                                            x{producto.quantity}
                                        </Badge>
                                    </div>
                                    <Badge className="fs-7" pill bg="dark" text="">
                                        ${producto.price * producto.quantity}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
            .concat(
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-2">Total:</div>
                    <div className="fs-2 bold">${total}</div>
                </div>
            );
    } else {
        result = (
            <div className="text-center">
                <Badge className="fs-6 container-fluid" pill bg="light" text="dark">
                    El carrito de compras esta vacío 😔
                </Badge>
            </div>
        );
    }

    return <div>{result}</div>;
};

export default CartList;
