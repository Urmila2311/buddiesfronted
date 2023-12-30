
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function Main(){
    return(
        <div>
            <Container className=" mt-5  col-5">
            
            <h1 >Login</h1>
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
                
            <Row className="mb-3">
            <div className="d-grid gap-2">
      
                  <Button variant="secondary" size="lg">
                    Login
                  </Button>
                  
                  <Link to="/registration">  <Button variant="primary" size="lg" active>
                    Registered yourself
                  </Button>{' '} </Link>
                   
                  <Link to="/dashboardtelecaller">  <Button variant="primary" size="lg" active>
                    Click here for telecallerdashboard
                  </Button>{' '} </Link>
                  <Link to="/dashboardbank">  <Button variant="primary" size="lg" active>
                    Click here for bankdashboard
                  </Button>{' '} </Link>
                  <Link to="/dashboardagencyowner">           <Button variant="primary" size="lg" active>
                    Click here for agency owner dashboard
                  </Button>{' '} </Link>
            </div>
            </Row>
                
                
             </Container>
        </div>
    );
}