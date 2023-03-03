import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const navigateSingIn = () => {
    navigate("/signin");
  };
  return (
    <div className=" mt-3 container w-50 mx-auto">
      <h2>Please Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" required />
          <Form.Label className="mt-3">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p className="mt-3">
          Already have account?{" "}
          <span
            style={{ cursor: "pointer" }}
            className="text-danger"
            onClick={navigateSingIn}
          >
            Please SingIn
          </span>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
