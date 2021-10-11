import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ResultUrl from "./ResultUrl";

class UrlForm extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        shortenedUrl: ''
      }
    }

    stateUpdater = (e) => {
      this.setState({
        shortenedUrl: "hello"
      });
      
    }
    render() {
      return <div>
        <Container fluid>
          <Row></Row>
        <Row>
            <Col style = {{padding: '10px'}}>

            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Shorten URL here.</Card.Title>
      <Card.Text>
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter URL." />
        </Form.Group>
        <Button variant="primary" type="submit" onClick = {() => this.stateUpdater()} >
            Shorten URL!
        </Button>
      </Form>   
      </Card.Text>
      <ResultUrl text = {this.state.shortenedUrl} />
  </Card.Body>
</Card>        
            </Col>
        </Row> 
        </Container>
      </div>
      
    }
  }

  export default UrlForm;





