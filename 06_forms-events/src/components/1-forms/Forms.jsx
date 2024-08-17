import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPAssword] = useState("");

  const handleUsername = (e) => {
    // console.log(e.target.value); //? gibt den wert in der Input zurück
    setUsername(e.target.value); //? state aktualisiert
  };

  console.log(username);

  return (
    <Form>
      <h1 className="text-danger">FORMS</h1>
      <Form.Group className="mb-3" controlId="username">
      {/* //* Short circuit oder Ternary bedingtes rendern  */}
        <Form.Label>{username && <span>Hello {username}</span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={handleUsername}
          id="username"
          name="username"
          value={username}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>{email && <span>Email: {email}</span>}</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        onChange={(e)=> setEmail(e.target.value)}
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
        onChange={(e)=> setPAssword(e.target.value)}
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

export default Forms;
