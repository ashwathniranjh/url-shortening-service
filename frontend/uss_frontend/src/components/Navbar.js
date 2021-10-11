import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container fluid>
                <Navbar.Brand href="#home">
                <img
                    src={process.env.PUBLIC_URL + 'Capture.PNG'}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
        </Container>
        </Navbar>
    
    );
  }
  
  export default NavBar;
  

