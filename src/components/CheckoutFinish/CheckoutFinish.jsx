import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const CheckoutFinish = () => {
    const { orderId } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "orders", orderId);
        getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
    }, [orderId]);

    return (
        <div className="minHeight d-flex text-center justify-content-center flex">
            <div className="center">
                <p className="badge text-wrap text-light bg-primary fs-3 mx-3">Tu orden fue cargada con éxito!</p>
                <p className="badge text-wrap text-dark bg-light fs-5">ID de orden: {orderId}</p>
            </div>
        </div>
    );
};

export default CheckoutFinish;
