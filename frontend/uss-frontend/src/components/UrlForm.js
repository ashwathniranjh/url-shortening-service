
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class UrlForm extends React.Component {
  
    render() {
      return <div>
        <Container fluid>
        <Row>
            <Col>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter the url to be shortened.</Form.Label>
                <Form.Control type="email" placeholder="Enter URL." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Shorten URL!
            </Button>
            </Form>        
            </Col>
            <Col>
            </Col>
        </Row> 
        </Container>
      </div>
      
    }
  }

  export default UrlForm;





