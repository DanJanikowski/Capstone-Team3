import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"

function NavBar() {
  return (
    <Navbar expand="lg" className='Narbar' style={{fontWeight:"bold", backgroundColor:'lightblue'}} >
      <Container className='container-fluid'>
        <Navbar.Brand className='nav-item' href="/home">HR Wizard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto "style={{ display:"flex", justifyContent:"space-between", width:"600px"}}>
            <Nav className="mx-auto " >
              <Nav.Link className='nav-item ' href="/home">Home</Nav.Link>
            </Nav>

            <Nav className="mx-auto"  >
              <Nav.Link  className='nav-item' href="/home/search">Search</Nav.Link>
            </Nav>
          </Nav>

          <Nav className="ml-auto ">
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