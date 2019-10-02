import React from "react";
import { Card } from "react-bootstrap";

const Word = ({ removeWord, word, index, isClickedLearned }) => {
  return (
    <Card
      style={{
        cursor: "pointer",
        maxWidth: "100%",
        display: "inline-block"
      }}
      onMouseEnter={() => isClickedLearned(word.id)}
      onMouseLeave={() => isClickedLearned(word.id)}
      onDoubleClick={() => removeWord(word.id)}
      onClick={() => console.log(word.id)}
      key={index}
    >
      <Card.Body className={word.isClicked ? "active-card" : "passive-card"}>
        <Card.Text>{word.isClicked ? word.target : word.main}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Word;
