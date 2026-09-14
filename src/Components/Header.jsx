
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col , Row } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">
          Navbar
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="navbar-toggle"
        />

        <Navbar.Collapse id="navbarScroll">
          <Row className='d-flex justify-content-between w-100'>
          
          <Col sm="8" xs="12" >
              <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="w-100 justify-self-center input-search"
              
            />
            </Col>

          <Col sm="4" xs="12">
            <Nav className="navbar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          </Col>

          
            
          </Row>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
