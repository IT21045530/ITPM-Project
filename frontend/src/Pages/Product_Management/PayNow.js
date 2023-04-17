
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

function PayNow() {
    return (
        <>
            <Container style={{ backgroundColor: 'LightGray', marginTop: '60px', width: '80%', padding: '40px', borderRadius: '5px' }}>

                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Product ID</Form.Label>
                            <Form.Control type="ProductID" placeholder="Enter ProductID" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="ProductName" placeholder="ProductName" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formGridUnitPrice">
                            <Form.Label>Total Price</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Payment Methode</label><br></br>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                <img src={Master} style={{ height: '50px' }} />
                            </label>
                        </div>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit" href='/ThankYou'>
                        Pay Now
                    </Button>
                </Form>




            </Container>
        </>
    );
}

export default PayNow;