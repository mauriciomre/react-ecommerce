import React from "react";
import { v4 as uuid } from "uuid";
import Badge from "react-bootstrap/Badge";
import BuyerForm from "../BuyerForm/BuyerForm";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutStart = () => {
    const navigate = useNavigate();
    const { cart, total } = useCartContext();

    let result;
    if (cart.length) {
        result = cart
            .map((item) => {
                return (
                    <div key={uuid()} className="container text-center border-light-subtle mb-2 p-3">
                        <div key={uuid()} className="row">
                            <img className="img col-4" src={item.img} />

                            <div key={uuid()} className="col-8 detail-item-container">
                                <div key={uuid()} className="d-flex justify-content-between align-items-center">
                                    <div key={uuid()}>{item.name}</div>
                                </div>

                                <div key={uuid()} className="d-flex justify-content-between align-items-center">
                                    <div key={uuid()} className="d-flex align-items-center">
                                        <Badge key={uuid()} className="me-1 text-wrap" pill bg="light" text="secondary">
                                            ${item.price}
                                        </Badge>
                                        <Badge key={uuid()} pill bg="light text-wrap" text="secondary">
                                            x{item.quantity}
                                        </Badge>
                                    </div>
                                    <Badge key={uuid()} className="fs-7 text-wrap" pill bg="dark">
                                        ${item.price * item.quantity}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
            .concat(
                <>
                    <div
                        key={uuid()}
                        className="d-flex justify-content-between align-items-center mb-5 pt-3 border-top"
                    >
                        <div key={uuid()} className="fs-2">
                            Total:
                        </div>
                        <div key={uuid()} className="fs-2 bold">
                            ${total}
                        </div>
                    </div>
                </>
            );
    } else {
        navigate("/");
    }
    return (
        <div className="row p-4 minHeight maxWidth mx-auto">
            <div className="p-4 col-md-7 col-sm-12">
                <BuyerForm cart={cart} total={total} />
            </div>

            <div className="p-4 col-md-5 col-sm-12">
                <h4 className="border-bottom text-secondary bg-light badge fs-6">Detalle de compra</h4>
                {result}
            </div>
        </div>
    );
};

export default CheckoutStart;
