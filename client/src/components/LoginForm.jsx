import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {

  const history = useHistory();

  const [loginFormInput, setLoginFormInput] = useState({
    userName: "",
    password: ""
  });

  const onSubmitLoginForm = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      userName: loginFormInput.userName,
      password: loginFormInput.password
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('user_details', JSON.stringify(res.data[0]));
      console.log("Just set local storage");
      history.push("/chat");
      history.go(0);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="login-form">
      <Form>
        <h2 className="login-heading">Login</h2>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Enter username"
            value={loginFormInput.userName}
            onChange={e => {
              setLoginFormInput({
                ...loginFormInput,
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
            value={loginFormInput.password}
            onChange={e => {
              setLoginFormInput({
                ...loginFormInput,
                password: e.target.value
              })
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={e => onSubmitLoginForm(e)}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm;
