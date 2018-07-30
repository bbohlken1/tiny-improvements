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
      // friends: [],

      awards: [],
      kudo: "",

      // pets: [
      //   {
      //     name: 'Memphis',
      //     age: 12,
      //     type: 'Dog'
      //   },
      //   {
      //     name: 'Baby',
      //     age: 11,
      //     type: 'Panther'
      //   },
      //   {
      //     name: 'Peach',
      //     age: 3,
      //     type: 'Cat'
      //   },
      //   {
      //     name: 'Opal',
      //     age: 1,
      //     type: 'Kitten'
      //   }
      // ]


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
  updateKudo = event => {
    this.setState({ kudo: event.target.value })
  };

  postKudo = () => {
    axios.post("/api/kudos",
      {
        id: 5,
        title: this.state.kudo,
        comment: "Have you seen how fast George types??"
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
            <h1>Tiny Progress {this.state.kudo}</h1>
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
              updateKudo={this.updateKudo}
              kudo={this.state.kudo}
              name={this.state.users.map(user => <option> {user.name} </option>)}
            />
          </Col>
        </Row>

        {/*New Code Goes Below Here */}

        {/* <Row><Col md="12">
          <Button onClick={this.postKudo} >Click Me</Button>
        </Col></Row> */}
        {/* {
        //   this.state.pets.map(pet => <PetCard name={pet.name} age={pet.age} />)
        // } */}

        {/* // {
        //   this.state.awards.map((award, index) => <AwardCard key={index} title={award.title} comment={award.comment} />)
        // } */}

        {/* <hr />
        <h1> 🙋🏽 Friend Space </h1>
        <br />
        <h4> My Friend List: </h4>
        <br />
        {
          this.state.friends.map((friend, index) =>
            <Card key={index}>
              <CardBody >
                <h2> {friend.name}</h2>
                <p> {friend.location} </p>
              </CardBody>
            </Card>
          )
        } */}



      </Container>
    );
  }
}

export default App;