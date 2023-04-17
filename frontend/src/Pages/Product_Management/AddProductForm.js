
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddProductForm() {
  return (
    <>
      <Container style={{ backgroundColor: 'LightGray', marginTop: '60px', width: '80%', padding: '40px', borderRadius: '5px' }}>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridProductID">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="ProductID" placeholder="Enter ProductID" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProductID">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="ProductID" placeholder="ProductID" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="good plant" />
          </Form.Group>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCatagory">
              <Form.Label>Catagory</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Flower & Herbs</option>
                <option>Vegitable & Fruites</option>
                <option>Grains</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridImage">
            <Form.Label>Image</Form.Label>
            <Form.Control />
          </Form.Group>

          <br></br>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>



      </Container>
    </>
  );
}

export default AddProductForm;