import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemRemoveIcon from "../icons/ItemRemoveIcon";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CartList = () => {
    const { removeProduct, cart, total } = useCartContext();

    let result;
    if (cart.length) {
        result = cart
            .map((producto) => {
                return (
                    <div key={uuid()} className="containe text-center border-light-subtle mb-2 p-3">
                        <div key={uuid()} className="row">
                            <Link className="nav-link col-4" to={`/item/${producto.id}`}>
                                <img className="img" src={producto.img} />
                            </Link>

                            <div key={uuid()} className="col-8 detail-item-container">
                                <div key={uuid()} className="d-flex justify-content-between align-items-center">
                                    <div key={uuid()}>{producto.name}</div>
                                    <button
                                        key={uuid()}
                                        className="hiddenBtn"
                                        onClick={() => removeProduct(producto.id)}
                                    >
                                        <ItemRemoveIcon />
                                    </button>
                                </div>

                                <div key={uuid()} className="d-flex justify-content-between align-items-center">
                                    <div key={uuid()} className="d-flex align-items-center">
                                        <Badge key={uuid()} className="me-1 text-wrap" pill bg="light" text="secondary">
                                            ${producto.price}
                                        </Badge>
                                        <Badge key={uuid()} pill bg="light text-wrap" text="secondary">
                                            x{producto.quantity}
                                        </Badge>
                                    </div>
                                    <Badge key={uuid()} className="fs-7 text-wrap" pill bg="dark">
                                        ${producto.price * producto.quantity}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
            .concat(
                <>
                    <div className="d-flex justify-content-between align-items-center mb-5 pt-3 border-top">
                        <div className="fs-2">Total:</div>
                        <div className="fs-2 bold">${total}</div>
                    </div>
                </>
            );
    } else {
        result = (
            <div className="text-center">
                <Badge className="fs-6" pill bg="light" text="dark">
                    El carrito de compras esta vacío 😔
                </Badge>
            </div>
        );
    }

    return <div>{result}</div>;
};

export default CartList;
