import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("");
  const [formdata, setformdata] = useState([])

  const submit = () => {
    setformdata({ email: email, password: password })
    console.log(formdata)
  }
  return (
    <div>
      <Card
        className="card"
        style={{ width: "25rem", background: "#767677", height: "30rem" }}
      >
        <Card.Body>
          <h2>Login Form</h2>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <hr style={{ backgroundColor: "white" }} />
            <Switch><Link to="/Register">
              <Button variant="warning">New Registration</Button>
            </Link></Switch>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
 
}

export default Login;
