import React from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";

const VoteForm = props => (
  <Card>
    <CardBody className="mx-auto">
      <Form>
        <h1> {props.team} </h1>
        <hr />
        <FormGroup>
          <Label>Top Performer:</Label>
          <Input type="text" placeholder="Team Top Performer" />
        </FormGroup>
        <FormGroup>
          <Label>Best Team Player:</Label>
          <Input type="text" placeholder="Best Team Player" />
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
)

export default VoteForm;