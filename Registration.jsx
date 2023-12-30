
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';



export function Registration(){
    return(
        <div>
            <h4>Registration page</h4>
            
            
        <Container className=" mt-5  col-5">
            
            
            <Row >
        <FloatingLabel  controlId="floatingInput"  label="First Name"    className="mb-3">
        <Form.Control type="text" placeholder="enter first name"  name="firstname"/>
        </FloatingLabel>
            </Row>
            
             <Row >
        <FloatingLabel  controlId="floatingInput"  label="Last Name"    className="mb-3">
        <Form.Control type="text" placeholder="enter last name"  name="lastname"/>
        </FloatingLabel>
            </Row> 
            
            <Row >
        <FloatingLabel  controlId="floatingInput"  label="Phone No"    className="mb-3">
        <Form.Control type="phone" placeholder="enter phone no"  name="phoneno"/>
        </FloatingLabel>
            </Row> 
            
            <Row >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
            </Row>
            
            <Row >
        <FloatingLabel  controlId="floatingInput"  label="Email address"    className="mb-3">
        <Form.Control type="email" placeholder="name@example.com"  name="email"/>
        </FloatingLabel>
            </Row>
           <Row className="mb-3">
      <FloatingLabel controlId="floatingPassword" label="Password">
      <Form.Control type="password" placeholder="Password"  name="password"/>
      </FloatingLabel>
           </Row>
           <Row className="mb-3">
     <FloatingLabel controlId="floatingSelect" label="Role" name="role">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">Bank</option>
        <option value="2">Agency Owner</option>
        <option value="3">Telecaller</option>
      </Form.Select>
    </FloatingLabel>
            </Row>
            
            
            
            <Row>
        <Button variant="secondary" size="lg">
                    Click To Register
                  </Button>
        </Row>
        </Container>
        
        
        
        </div>
    );
}