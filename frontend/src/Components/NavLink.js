// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../Images/logo.png'
// import Button from 'react-bootstrap/Button';
// import '../Styles/btnStyles.css'

// function NavLink() {
//   return (
//     <>
//     <Container style={{display: 'flex', justifyContent: 'space-between'}}>
//         <div style={{height: '5rem', width: 'auto', marginTop: '10px'}}>
//             <img style={{width: '200px', height:'5rem'}} src= {Logo} alt="Smart " />
//         </div>
//       <Navbar style={{backgroundColor: 'rgb(60, 179, 113)', width: '1050px', height: '3rem',  marginTop: '40px', borderRadius: '5px'}}>
//         <Container style={{display: 'flex', justifyContent: 'space-between',width: '100%', }}>
//           {/* <Navbar.Brand href="#home" style={{width: '100px', height:'50px', marginRight: '35px'}}>
//             <img style={{width: '100px', height:'50px'}} src= {Logo} alt="Smart " />
//           </Navbar.Brand> */}
//           <Nav className="me-auto">
//             <Nav.Link className='btnLink' href="/" >Home</Nav.Link>
//             <Nav.Link className='btnLink' href="/OurServices" >Our services</Nav.Link>
//             <Nav.Link className='btnLink' href="/Blogs" >Blog</Nav.Link>
//             <Nav.Link className='btnLink' href="#pricing" >ContactUs</Nav.Link>
//             <Nav.Link className='btnLink' href="/Plants" >Seller</Nav.Link>

//           </Nav>
//           <Nav>
//           <Button variant="light" >Logout </Button>{' '}
//           </Nav>
//         </Container>
//       </Navbar>

//     </Container>

//     </>
//   );
// }

// export default NavLink;

// import Button from 'react-bootstrap/Button';

// import Container from 'react-bootstrap/Container';

// import Form from 'react-bootstrap/Form';

// import Nav from 'react-bootstrap/Nav';

// import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../Images/logo.png'




// function NavLink() {

//   return (
//     <Container style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ height: '5rem', width: 'auto', marginTop: '10px' }}>
//         <img style={{ width: '200px', height: '5rem' }} src={Logo} alt="Smart " />
//       </div>
//       <Navbar style={{ backgroundColor: 'rgb(60, 179, 113)', width: '1050px', height: '4rem', marginTop: '25px', borderRadius: '5px' }} expand="lg">

//         <Container fluid style={{ marginLeft: '3%', marginRight: '3%' }}>
//           <Navbar.Toggle aria-controls="navbarScroll" />

//           <Navbar.Collapse id="navbarScroll" >

//             <Nav

//               className="me-auto my-2 my-lg-0"

//               style={{ maxHeight: '200px', }}

//               navbarScroll

//             >

//               <Nav.Link className='btnLink' href="/" >Home</Nav.Link>
//               <Nav.Link className='btnLink' href="/OurServices" >Our services</Nav.Link>
//               <Nav.Link className='btnLink' href="/Blogs" >Blog</Nav.Link>
//               <Nav.Link className='btnLink' href="#pricing" >ContactUs</Nav.Link>
//               <Nav.Link className='btnLink' href="/Plants" >Seller</Nav.Link>

//             </Nav>

//             <Form className="d-flex">

//               <Button variant="outline-success">Login</Button>

//             </Form>

//           </Navbar.Collapse>

//         </Container>

//       </Navbar>

//     </Container>

//   );

// }




// export default NavLink;


import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';

import Nav from 'react-bootstrap/Nav';
import '../Styles/btnStyles.css'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'




function NavLink() {

  return (

    <Navbar style={{ backgroundColor: 'rgb(60, 179, 113)' }} expand="lg">

      <Container fluid style={{ marginLeft: '3%', marginRight: '3%' }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100px"
            height="50px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '10%' }}>

          <Nav

            className="me-auto my-2 my-lg-0"

            style={{ maxHeight: '100px', justifyContent: 'space-between', }}

            navbarScroll

          >

            <Nav.Link className='btnLink' href="/" >Home</Nav.Link>
            <Nav.Link className='btnLink' href="/OurServices" >Our services</Nav.Link>
            <Nav.Link className='btnLink' href="/Blogs" >Blog</Nav.Link>
            <Nav.Link className='btnLink' href="/Test" >ContactUs</Nav.Link>
            <Nav.Link className='btnLink' href="/WelcomeSeller" >Seller</Nav.Link>

          </Nav>

          <Form className="d-flex">

            <Button href="/Login" variant="outline-success">Login</Button>

          </Form>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );

}




export default NavLink;