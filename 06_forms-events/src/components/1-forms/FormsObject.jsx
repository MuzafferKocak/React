import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormsObject() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //? destr.
  const { username, email, password } = data;

  const handleData = (e) => {
    console.log(e.target);

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    alert(`
        username: ${username},
        email: ${email},
        password: ${password}, 
      `);
  };

  return (
    <Form on onSubmit={handleSubmit}>
      <h1 className="text-danger">FORMS OBJECT</h1>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>{username && <span>Hello {username}</span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={handleData}
          id="username"
          name="username"
          value={username}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleData}
          id="email"
          name="email"
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleData}
          id="password"
          name="password"
          value={password}
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormsObject;
