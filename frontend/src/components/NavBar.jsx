import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg='primary' expand="lg" >
      <Container className='container'>
        <Navbar.Brand className='nav-item' href="/home">HR Wizard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-item' href="/home">Home</Nav.Link>
            <Nav.Link  className='nav-item' href="/home/search">Search</Nav.Link>
            <NavDropdown  className='nav-item' title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Login</NavDropdown.Item>
              <NavDropdown.Item href="/home/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;