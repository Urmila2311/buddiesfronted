import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {saveEmployees} from '../Services/ServiceEmployee.js';

import Navbar from 'react-bootstrap/Navbar';



export function Registration(){
    
    
    const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    phoneno: '',
    password: '',
    email: '',
    address: '',
    role: '',
  });
  
    const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const result = await saveEmployees(formdata);
            console.log("Data Inserted from backend!!");
            
        }catch(error){
            console.log("Something went wrong at connection!!");
            }
    };
    
    return(
        <div>
            <h4>Registration page</h4>
            
            
        <Container className=" mt-5  col-5">
            <Form onSubmit={handleSubmit}>
            
            <Row >
            
        <FloatingLabel  controlId="floatingInputFirstname"  label="First Name"    className="mb-3">
        <Form.Control type="text" placeholder="enter first name"  name="firstname"   onKeyUp={handleChange}   />
        </FloatingLabel>
            </Row>
            
             <Row >
        <FloatingLabel  controlId="floatingInputLastname"  label="Last Name"    className="mb-3">
        <Form.Control type="text" placeholder="enter last name"  name="lastname"   onKeyUp={handleChange}  />
        </FloatingLabel>
            </Row> 
            
            <Row >
        <FloatingLabel  controlId="floatingInputPhoneno"  label="Phone No"    className="mb-3">
        <Form.Control type="phone" placeholder="enter phone no"  name="phoneno"   onKeyUp={handleChange}   />
        </FloatingLabel>
            </Row> 
            
            <Row >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control as="textarea" rows={3}  name="address"  onKeyUp={handleChange}   />
      </Form.Group>
            </Row>
            
            <Row >
        <FloatingLabel  controlId="floatingInputemail"  label="Email address"    className="mb-3">
        <Form.Control type="email" placeholder="name@example.com"  name="email"  onKeyUp={handleChange}  />
        </FloatingLabel>
            </Row>
           <Row className="mb-3">
      <FloatingLabel controlId="floatingPassword" label="Password">
      <Form.Control type="password" placeholder="Password"  name="password"   onKeyUp={handleChange} />
      </FloatingLabel>
           </Row>
           <Row className="mb-3">
     <FloatingLabel controlId="floatingSelectrole" label="Role" name="role"  onChange={handleChange}>
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="Bank">Bank</option>
        <option value="Owner">Agency Owner</option>
        <option value="Telecaller">Telecaller</option>
      </Form.Select>
    </FloatingLabel>
            </Row>
            
            
            
            <Row>
        <Button variant="secondary" size="lg" type="submit">
                    Click To Register
                  </Button>
                  
                
        </Row>
        
        </Form>  
        </Container>
        
        
        
        </div>
    );
}