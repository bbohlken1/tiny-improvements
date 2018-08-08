import React from "react";
import {
    Col, Container, Row, Form, FormGroup, Input, Label, Button, Card,
    CardBody,
} from "reactstrap";
const Filter = props => (
    <Container>
        <Row>
            <Col md="12" lg="5" />
            <p>Filter by Name:</p>
            <Col md="12" lg="2">
                <Input type="select" onChange={props.filterName} >
                    {props.receiver}
                </Input>

            </Col>
            <Col md="12" lg="2">
                <Button onClick={props.clearFilter} color="success" >Clear Filter</Button>
            </Col>
        </Row>
    </Container>

);
export default Filter;