import React from "react";
import { Card } from "react-bootstrap";

const Word = ({ word, index, isClicked, isLearned, addLearnedWord }) => {
  return (
    <Card
      style={{
        cursor: "pointer",
        maxWidth: "100%",
        display: "inline-block"
      }}
      onMouseEnter={() => isClicked(word.id)}
      onMouseLeave={() => isClicked(word.id)}
      onClick={() => isLearned(word.id)}
      onDoubleClick={() => addLearnedWord(word.id)}
      key={index}
    >
      <Card.Body className={word.isClicked ? "active-card" : "passive-card"}>
        <Card.Text>{word.isClicked ? word.target : word.main}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Word;
