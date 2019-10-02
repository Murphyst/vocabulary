import React from "react";

import Header from "./Components/Header";
import "./App.css";
import VocabCardsLearning from "./Components/VocabCardsLearning";

import { Container, Row } from "react-bootstrap";
import NewVocab from "./Components/NewVocab";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      ownValue: "",
      targetValue: "",
      own: [],
      target: [],
      error: ""
    };
  }
  mouseMove = e => {
    var index = this.state.own.indexOf(e);

    console.log(index);

    console.log(this.state.target[index]);
  };

  handleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };
  handleChangeOwn = e => {
    this.setState({ ownValue: e.target.value });
  };
  handleChangeTarget = e => {
    this.setState({ targetValue: e.target.value });
  };

  handleAddNewVocab = e => {
    e.preventDefault();

    const ownValue = this.state.ownValue;
    const targetValue = this.state.targetValue;

    this.state.own.indexOf(ownValue) > -1
      ? this.setState(prevState => ({
          error: "You have already add this word"
        }))
      : this.setState(prevState => ({
          own: prevState.own.concat(ownValue),
          error: ""
        }));

    this.state.target.indexOf(targetValue) > -1
      ? this.setState(prevState => ({
          error: "You have already add this word"
        }))
      : this.setState(prevState => ({
          target: prevState.target.concat(targetValue),
          error: ""
        }));

    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <NewVocab
              isActive={this.state.isActive}
              handleActive={this.handleActive}
              handleAddNewVocab={this.handleAddNewVocab}
              handleChangeOwn={this.handleChangeOwn}
              handleChangeTarget={this.handleChangeTarget}
              ownValue={this.state.ownValue}
              targetValue={this.state.targetValue}
              error={this.state.error}
            />
          </Row>
        </Container>
        <Row className="justify-content-around" style={{ marginTop: "30px" }}>
          <VocabCardsLearning
            own={this.state.own}
            target={this.state.target}
            title={"Ogreniyorum"}
            mouseMove={this.mouseMove}
          />
          {/* <VocabCardsLearned title={"Ogrendim"} /> */}
        </Row>
      </div>
    );
  }
}
