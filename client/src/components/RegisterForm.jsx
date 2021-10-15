import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './RegisterForm.css';

function RegisterForm() {

  const [registerFormInput, setRegisterFormInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  });

  const onSubmitRegisterForm = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', {
      firstName: registerFormInput.firstName,
      lastName: registerFormInput.lastName,
      userName: registerFormInput.userName,
      password: registerFormInput.password
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="register-form">
      <Form>
        <h2 className="register-heading">Register</h2>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="fname" 
            placeholder="Enter first name" 
            value={registerFormInput.firstName}
            onChange={e => {
              setRegisterFormInput({
                ...registerFormInput,
                firstName: e.target.value
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="lname" 
            placeholder="Enter last name"
            value={registerFormInput.lastName}
            onChange={e => {
              setRegisterFormInput({
                ...registerFormInput,
                lastName: e.target.value
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="uname" 
            placeholder="Enter desired username" 
            value={registerFormInput.userName}
            onChange={e => {
              setRegisterFormInput({
                ...registerFormInput,
                userName: e.target.value
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={registerFormInput.password}
            onChange={e => {
              setRegisterFormInput({
                ...registerFormInput,
                password: e.target.value
              })
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={e => onSubmitRegisterForm(e)}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default RegisterForm;
