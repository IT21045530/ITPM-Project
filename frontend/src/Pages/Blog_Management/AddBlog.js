import Form from 'react-bootstrap/Form';
import "../../Styles/AddBlog.css";
import Container from 'react-bootstrap/esm/Container'

function TextControlsExample() {
  return (
    <Container style={{height: '500px', backgroundColor: 'lightgreen'}}> 
    <Form className="Foo1">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </Container>
  );
}

export default TextControlsExample;