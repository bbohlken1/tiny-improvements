import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from "reactstrap";
import AwardCard from './Components/AwardCard';
import KudosForm from './Components/KudosForm';
import PetCard from './Components/PetCard';
import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      awards: [],
      kudosText: '',
      kudosTitle: '',
      // r QUESTIONS why dont sender and receiver need to be defined here?



    }

  }


  componentDidMount = () => {
    axios.get("/api/users").then(response => {
      this.setState({
        users: response.data
      })
    })



    axios.get("/api/friends").then(response => {
      this.setState({
        friends: response.data
      })
    })
  }

  //------------------------------
  updateKudosText = event => {
    this.setState({ kudosText: event.target.value })
  };

  updateKudosTitle = event => {
    this.setState({ kudosTitle: event.target.value })
  };

  updateReceiver = event => {
    this.setState({ receiver: event.target.value })
  }
  //QUESTION: why doeesn't my kudos form recognize the default sender/receiver option on first input. and only recognizes a user on change

  updateSender = event => {
    this.setState({ sender: event.target.value })
  }

  postKudo = () => {
    axios.post("/api/kudos",
      {
        id: 5,
        title: this.state.kudosTitle,
        comment: this.state.kudosText,
        receiver: this.state.receiver,
        sender: this.state.sender,
      })
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

  };




  render() {

    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          {/* <Col md="12" lg="3">
            <Button color="success">Give Kudos</Button>
          </Col> */}
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard title={award.title} comment={award.comment} receiver={award.receiver} sender={award.sender} />)}
          </Col>

        </Row>

        <Row>
          <Col md="12">
            <KudosForm
              postKudo={this.postKudo}
              updateKudosText={this.updateKudosText}
              updateKudosTitle={this.updateKudosTitle}
              updateReceiver={this.updateReceiver}
              updateSender={this.updateSender}
              receiver={this.state.users.map(user => <option> {user.name} </option>)}
              sender={this.state.users.map(user => <option> {user.name} </option>)}
            />
          </Col>
        </Row>

        {/*New Code Goes Below Here */}


      </Container>
    );
  }
}

export default App;