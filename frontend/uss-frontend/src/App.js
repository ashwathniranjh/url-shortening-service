import Container from 'react-bootstrap/Container';
import NavBar from "./components/Navbar";
import UrlForm from "./components/UrlForm";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container fluid>
        <UrlForm/>
      </Container>
    </div>
  ); 
}

export default App;


