import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from "reactstrap";
import AwardCard from './Components/AwardCard';
import KudosForm from './Components/KudosForm';
import Filter from './Components/Filter';
import axios from 'axios';



document.body.style.backgroundColor = "lavender";

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      awards: [],
      kudosText: '',
      kudosTitle: '',
      filterName: '',

    }

  }



  componentDidMount = () => {
    axios.get("/api/users").then(response => {
      this.setState({
        users: response.data
      })
    })

    axios.get("/api/kudos").then(response => {
      this.setState({
        awards: response.data
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

  updateSender = event => {
    this.setState({ sender: event.target.value })
  };

  updateFilter = event => {
    axios.get("/api/kudosfilter/" + event.target.value).then(response => {
      this.setState({
        awards: response.data
      })
    })

  }

  postKudo = () => {
    alert("BOP BOP - You done did it!!");
    axios.post("/api/kudos",
      {
        id: this.state.users.find(user => user.name === this.state.sender).id,
        Name: this.state.kudosTitle,
        Comment__c: this.state.kudosText,
        Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
        Sender__c: this.state.users.find(user => user.name === this.state.sender).id,
      })
      .then(response => {

      })

  };

  clearFilter = () => {
    axios.get("/api/kudos").then(response => {
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
            <h1>Ku Ku Kudo-Choo</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12">
            <KudosForm
              postKudo={this.postKudo}
              updateKudosText={this.updateKudosText}
              updateKudosTitle={this.updateKudosTitle}
              updateReceiver={this.updateReceiver}
              updateSender={this.updateSender}
              receiver={this.state.users.map((user, index) => <option key={index}> {user.name} </option>)}
              sender={this.state.users.map((user, index) => <option key={index} > {user.name} </option>)}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="12">
            {this.state.filterName}
            <Filter
              receiver={this.state.users.map((user, index) => <option key={index}> {user.name} </option>)}
              filterName={this.updateFilter}
              clearFilter={this.clearFilter}
            />
          </Col>
        </Row>
        <br />

        <Row>
          {console.log(this.state.awards)}
          <Col md="12" lg="9">
            {this.state.awards.map((award, index) => <AwardCard key={index} title={award.name} comment={award.comment__c} receiver={award.receiver__r.Name} sender={award.sender__r.Name} />)}
          </Col>

        </Row>


      </Container>
    );
  }
}

export default App;