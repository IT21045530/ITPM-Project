
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Master from '../../Images/mastercard.png';
import Visa from '../../Images/visacard.jpg';
import Cod from '../../Images/cod.jpg';

function PaymentForm() {
    return (
        <>
            <Container style={{ backgroundColor: 'LightGray', marginTop: '60px', width: '50%', padding: '40px', borderRadius: '5px' }}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formGridUnitPrice">
                            <Form.Label>Unit Price</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>

                        <div class="form-group" as={Col} >
                            <label for="inputState">Quntity</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                            </select>
                        </div>
                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridTotalPrice">
                            <Form.Label> Total Price</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridAddress">
                            <Form.Label>Delivery Address</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    <label for="staticEmail" class="col-sm-2 col-form-label">Payment Methode</label><br></br>
                    <div style={{ display: 'flex' }}>
                        <Row className="mb-3" style={{ marginRight: '14px' }}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    <img src={Master} style={{ height: '50px' }} />
                                </label>
                            </div>
                        </Row>
                        <br></br>
                        <Row className="mb-3" style={{ marginRight: '14px' }}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2">
                                    <img src={Visa} style={{ height: '40px' }} />
                                </label>
                            </div>
                        </Row>
                        <br></br>
                        <Row className="mb-3" style={{ marginRight: '14px' }}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2">
                                    <img src={Cod} style={{ height: '50px' }} />
                                </label>

                            </div>
                        </Row>
                    </div>

                    <br></br>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit" href="/PayNow">
                        Pay Now
                    </Button>
                </Form>




            </Container>
        </>
    );
}

export default PaymentForm;