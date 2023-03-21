import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/logo.png'
import Button from 'react-bootstrap/Button';
import '../Styles/btnStyles.css'

function NavLink() {
  return (
    <>
    <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{height: '5rem', width: 'auto', marginTop: '10px'}}>
            <img style={{width: '200px', height:'5rem'}} src= {Logo} alt="Smart " />
        </div>
      <Navbar style={{backgroundColor: 'rgb(60, 179, 113)', width: '1050px', height: '3rem',  marginTop: '40px', borderRadius: '5px'}}>
        <Container style={{display: 'flex', justifyContent: 'space-between',width: '100%', }}>
          {/* <Navbar.Brand href="#home" style={{width: '100px', height:'50px', marginRight: '35px'}}>
            <img style={{width: '100px', height:'50px'}} src= {Logo} alt="Smart " />
          </Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link className='btnLink' href="/" >Home</Nav.Link>
            <Nav.Link className='btnLink' href="#features" >Our services</Nav.Link>
            <Nav.Link className='btnLink' href="/Blogs" >Blog</Nav.Link>
            <Nav.Link className='btnLink' href="#pricing" >ContactUs</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="light" >Logout </Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    
    </Container>
      
    </>
  );
}

export default NavLink;