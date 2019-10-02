import React from "react";
import { Card, Button } from "react-bootstrap";

export default props => (
  <Card style={{ width: "40%", height: "auto" }}>
    <Card.Title>{props.title}</Card.Title>

    <div>
      {props.own &&
        props.own.map((e, index) => (
          <Button
            key={index}
            onMouseMove={() => props.mouseMove(e)}
            type="submit"
          >
            {e}
          </Button>
        ))}
    </div>
  </Card>
);
