
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';



export function Dashboardtelecaller(){
    return(
    <div>
        
        <h2>
            this is telecaler bashboard
        </h2>  
           
       <Container fluid>
      <Row>
        <Col md={2}>
          
          
          <Navbar expand="lg" className="bg-body-dark  "     bg="dark" variant="dark"     >
               <Container>
                <Navbar.Brand href="#home">Main Dashboard</Navbar.Brand>
              </Container>
          </Navbar>
          <br />
          
          <Navbar className="bg-body-dark"   bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home" >Update Work</Navbar.Brand>
            </Container>
          </Navbar>
      <br />
         
         
            <Navbar className="bg-body-dark"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href="#home">Update Profile</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
       
         <Navbar className="bg-body-dark"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href="#home">Logout</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
          
          
        </Col>
        <Col md={10}>
          {/* Content */}
          <div className="p-4">
            <h2>Main Content</h2>
            <p>Your content goes here...</p>
          </div>
        </Col>
      </Row>
    </Container>    
    </div>
    );
}