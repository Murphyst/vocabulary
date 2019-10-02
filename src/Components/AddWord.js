import React, { useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";

const AddWord = ({ addWord, error1 }) => {
  const [main, setMain] = useState("");
  const [target, setTarget] = useState("");
  const [error, setError] = useState("");
  let textInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    if (!main || !target) {
      setError("Please enter main and target words!");
    } else {
      addWord(main, target);
      setError("");
      setMain("");
      setTarget("");
    }
    textInput.current.focus();
  };

  const handleFocus = () => {
    setError("");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Main Language</Form.Label>
          <Form.Control
            ref={textInput}
            type="text"
            placeholder="Enter a word to learn"
            value={main}
            onChange={e => setMain(e.target.value)}
            onFocus={handleFocus}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Target Language</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the word in target language"
            value={target}
            onChange={e => setTarget(e.target.value)}
            onFocus={handleFocus}
          />
        </Form.Group>
        {error1 && <Alert variant="danger">{error1}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Button type="submit" onClick={handleSubmit}>
          Add New Word
        </Button>
      </Form>
    </Container>
  );
};

export default AddWord;
