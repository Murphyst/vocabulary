import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Word from "./Components/Word";
import AddWord from "./Components/AddWord";
import { Container, Row, Col, Card } from "react-bootstrap";
import uuid from "uuid";
import LearnedWord from "./Components/LearnedWord";

const App = () => {
  const [words, setWords] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("words");
    if (data) {
      setWords(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  });

  const [learnedWords, setLearnedWords] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("learnedWords");
    if (data) {
      setLearnedWords(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
  });

  const isLearned = id => {
    const learningWords = [...words];
    const index = words.findIndex(word => word.id === id);
    if (!learningWords[index].isLearned) {
      learningWords[index].isLearned = true;
    }
  };

  const isClicked = id => {
    const newWord = [...words];
    const index = words.findIndex(word => word.id === id);
    if (!newWord[index].isClicked) {
      newWord[index].isClicked = true;
    } else {
      newWord[index].isClicked = false;
    }
    setWords(newWord);
  };

  const isClickedLearned = id => {
    const newWord = [...learnedWords];
    const index = learnedWords.findIndex(word => word.id === id);
    if (index === -1) {
      return;
    } else {
      if (!newWord[index].isClicked) {
        newWord[index].isClicked = true;
      } else {
        newWord[index].isClicked = false;
      }
    }
    setLearnedWords(newWord);
  };

  const addLearnedWord = id => {
    const index = words.findIndex(word => word.id === id);
    const learnedWord = words[index];
    const newLearnedWords = [...learnedWords, learnedWord];
    setLearnedWords(newLearnedWords);
    words.splice(index, 1);
    newLearnedWords.forEach(item => (item.isClicked = false));
  };

  const addWord = (main, target) => {
    if (
      learnedWords.some(word => word.main === main && word.target === target) ||
      words.some(word => word.main === main || word.target === target)
    ) {
      setError("This word is already added!");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const newWords = [
        ...words,
        {
          id: uuid(),
          main: main,
          target: target,
          isClicked: false,
          isLearned: false
        }
      ];
      console.log(newWords);
      console.log(words);
      setWords(newWords);
    }
  };

  const removeWord = id => {
    const newLearnedWords = learnedWords.filter(word => word.id !== id);
    setLearnedWords(newLearnedWords);
  };

  return (
    <div>
      <Header />
      <AddWord
        addWord={addWord}
        words={words}
        setWords={setWords}
        error1={error}
      />

      <Container style={{ marginTop: "25px", marginBottom: "25px" }}>
        <Row>
          <Col>
            <Card>
              <Card.Header style={{ textAlign: "center", fontSize: "2rem" }}>
                Learning
              </Card.Header>
              <Card.Body className="justify-content-around">
                {words.map((word, index) => (
                  <Word
                    word={word}
                    key={index}
                    index={index}
                    isClicked={isClicked}
                    isLearned={isLearned}
                    addLearnedWord={addLearnedWord}
                  />
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header style={{ textAlign: "center", fontSize: "2rem" }}>
                Learned
              </Card.Header>
              <Card.Body>
                {learnedWords.map((word, index) => (
                  <LearnedWord
                    word={word}
                    key={index}
                    index={index}
                    isClickedLearned={isClickedLearned}
                    removeWord={removeWord}
                  />
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
