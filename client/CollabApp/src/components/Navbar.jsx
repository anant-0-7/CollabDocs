import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../../public/Navbar.css";
import { useNavigate } from 'react-router-dom';

function NavigationBar() {

  const navigate = useNavigate();

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">CollabApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>navigate("/all")}>All Projects</Nav.Link>
              <Nav.Link onClick={()=>navigate("/my")}>My Projects</Nav.Link>
            </Nav>
            <Nav className="ms-auto"> {/* Aligns the new option to the right */}
              <Button variant="outline-light"onClick={()=>navigate("/create")}>
                Create New Project
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
