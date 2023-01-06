import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import Badge from "react-bootstrap/Badge";

const CheckoutStart = () => {
    const { orderId } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "orders", orderId);
        getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
    }, [orderId]);

    let result;
    if (data.items) {
        result = data.items
            .map((item) => {
                return (
                    <div key={uuid()} className="containe text-center border-light-subtle mb-2 p-3">
                        <div key={uuid()} className="row">
                            <img className="img col-4" src={item.img} />

                            <div key={uuid()} className="col-8 detail-item-container">
                                <div key={uuid()} className="d-flex justify-content-between align-items-center">
                                    <div key={uuid()}>{item.name}</div>
                                </div>

                                <div key={uuid()} className="d-flex justify-content-between align-items-center">
                                    <div key={uuid()} className="d-flex align-items-center">
                                        <Badge key={uuid()} className="me-1" pill bg="light" text="secondary">
                                            ${item.price}
                                        </Badge>
                                        <Badge key={uuid()} pill bg="light" text="secondary">
                                            x{item.quantity}
                                        </Badge>
                                    </div>
                                    <Badge key={uuid()} className="fs-7" pill bg="dark">
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
                            ${data.total}
                        </div>
                    </div>
                </>
            );
    }
    return (
        <div className="p-4" key={uuid()}>
            <h4 className="border-bottom text-secondary bg-light badge fs-6">Detalle de compra</h4>
            {result}
        </div>
    );
};

export default CheckoutStart;
