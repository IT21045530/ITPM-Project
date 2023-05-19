import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";

export default function Checkout() {
    const location = useLocation();
    const amount = location.state?.props;

    const [customer, setCustomer] = useState("");
    const [currency, setCurrency] = useState("LKR");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [ccv, setCcv] = useState("");

    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const user = localStorage.getItem("uid");
    const name = localStorage.getItem("Name");

    const token = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const placeOrder = (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:1337/api/cart-controller/all/${user}`, config)
            .then((res) => {
                const itemNames = res.data.Carts.map((cart) => cart.itemName);
                setCart(itemNames);
                console.log(itemNames);
                if (res.status === 200) {
                    const orderData = new FormData();
                    orderData.append("Items", cart);
                    orderData.append("placedBy", name);
                    orderData.append("amount", amount);
                    orderData.append("status", "Order Placed");
                    axios.post("http://localhost:1337/api/order-controller/", orderData)
                        .then((res) => {
                            console.log(res.data);
                        })
                        .catch((err) => {
                            alert(err);
                            return;
                        });
                    axios.delete(`http://localhost:1337/api/cart-controller/deletecart/${user}`)
                        .then((res) => {
                            console.log(res.data);
                            alert("Order Placed Successfully!")
                        })
                        .catch((err) => {
                            alert(err);
                            return;
                        });
                }
            })
            .catch((err) => {
                alert(err);
                return;
            });
    };

    return (
        <MDBContainer
            className="py-5"
            fluid
            style={{
                backgroundImage:
                    "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
            }}
        >
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" lg="8" xl="5">
                    <MDBCard className="rounded-3">
                        <MDBCardBody className="p-4">
                            <div className="text-center mb-4">
                                <h3>Rs.{amount}.00</h3>
                                <h6>Payment</h6>
                                <div className="">
                                    <img
                                        className="img-fluid"
                                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                        alt="Mastercard Logo"
                                    />
                                    <img
                                        className="img-fluid"
                                        src="https://img.icons8.com/color/48/000000/visa.png"
                                        alt="Visa Logo"
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4 pb-1"></div>
                            <MDBInput
                                label="Cardholder's Name"
                                id="form3"
                                type="text"
                                size="lg"
                                value={customer}
                                onChange={(e) => {
                                    setCustomer(e.target.value);
                                }}
                            />
                            <MDBRow className="my-4">
                                <MDBCol size="7">
                                    <MDBInput
                                        label="Card Number"
                                        id="form4"
                                        type="text"
                                        size="lg"
                                        value={cardNumber}
                                        onChange={(e) => {
                                            setCardNumber(e.target.value);
                                        }}
                                    />
                                </MDBCol>
                                <MDBCol size="2">
                                    <MDBInput
                                        label="Month"
                                        id="form5"
                                        type="text"
                                        size="lg"
                                        placeholder={expMonth}
                                        value={expMonth}
                                        onChange={(e) => {
                                            setExpMonth(e.target.value);
                                        }}
                                    />
                                </MDBCol>
                                <MDBCol size="2">
                                    <MDBInput
                                        label="Year"
                                        id="form5"
                                        type="text"
                                        size="lg"
                                        value={expYear}
                                        onChange={(e) => {
                                            setExpYear(e.target.value);
                                        }}
                                    />
                                </MDBCol>
                                <MDBCol size="2">
                                    <MDBInput
                                        label="CVV"
                                        id="form6"
                                        type="text"
                                        size="lg"
                                        placeholder={ccv}
                                        value={ccv}
                                        onChange={(e) => {
                                            setCcv(e.target.value);
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <Button
                                onClick={placeOrder}
                                variant="success"
                                size="lg"
                            >
                                Pay
                            </Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
