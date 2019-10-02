import React from "react";
import {
  Form,
  Button,
  InputGroup,
  Row,
  Container,
  FormControl
} from "react-bootstrap";

export default props => (
  <div>
    <Form style={{ margin: "30px 30px" }}>
      <InputGroup>
        <Button onClick={props.handleActive}>Yeni Kelime</Button>
        {props.error && (
          <span style={{ fontSize: "2rem" }}> {props.error}</span>
        )}
        {props.isActive && (
          <Container>
            <Row>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Turkcesi"
                  value={props.ownValue}
                  onChange={props.handleChangeOwn}
                />

                <FormControl
                  type="text"
                  placeholder="Yabancicasi"
                  value={props.targetValue}
                  onChange={props.handleChangeTarget}
                />
                <Button onClick={props.handleAddNewVocab} type="submit">
                  Ekle
                </Button>
              </InputGroup>
            </Row>
          </Container>
        )}
      </InputGroup>
    </Form>
  </div>
);
