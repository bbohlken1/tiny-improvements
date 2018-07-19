import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import AwardCard from './AwardCard'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [
        {
          userId: 45089,
          name: "Owen",
          position: "Captian of the Breakroom"
        },
        {
          userId: 223,
          name: "Brooke",
          position: "Winner of All Dance-Offs"
        },
        {
          userId: 6582,
          name: "Gobi",
          position: "King of Mid-Day Naps1"
        }
      ],

      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us."
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does."
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee."
        }

      ]

    }

  }

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
          <Col md="12" lg="3">
            <Button color="success">Give Kudos</Button>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard title={award.title} comment={award.comment} />)}
          </Col>
        </Row>


        <h1>Names</h1>
        <p>{this.state.users[0].name}</p>
        <p>{this.state.users[1].name}</p>
        <p>{this.state.users[2].name}</p>
        {this.state.users.map(user => <p>Hello, my name is {user.name}</p>)}

        <Row>
          <Col md="12">
            <Form>
              <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select">
                  {this.state.users.map(user => <option>{user.name}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Label>Username</Label>
                <Input type="text" placeholder="username" />
              </FormGroup>
            </Form>
          </Col>
        </Row>

        {/*New Code Goes Below Here */}

      </Container>
    );
  }
}

export default App;