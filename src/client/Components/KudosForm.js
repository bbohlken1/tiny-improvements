import React from "react";
import {
    Col, Container, Row, Form, FormGroup, Input, Label, Button, Card,
    CardBody
} from "reactstrap";
const KudosForm = props => (
    <Col md="12" lg="3">
        <Button onClick={props.postKudo} color="success">Give Kudos</Button>
        <Input onChange={props.updateKudo} value={props.kudo} />
        <Form>
            <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select" >
                    {props.name}
                </Input>
            </FormGroup>
            <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
            </FormGroup>
        </Form>
    </Col>


);
export default KudosForm;