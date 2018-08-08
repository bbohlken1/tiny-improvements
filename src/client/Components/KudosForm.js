import React from "react";
import {
    Col, Container, Row, Form, FormGroup, Input, Label, Button, Card,
    CardBody,
} from "reactstrap";


const KudosForm = props => (
    <Col md="12" lg="9">

        <Form>
            <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select" onChange={props.updateReceiver} >
                    {props.receiver}
                </Input>
            </FormGroup>
            <FormGroup>
                <Input type="text" placeholder="Kudos Title"
                    onChange={props.updateKudosTitle} value={props.kudosTitle} />
            </FormGroup>
            <FormGroup>
                <Input type="text" placeholder="Kudos Text"
                    onChange={props.updateKudosText} value={props.kudosText} />
            </FormGroup>
            <FormGroup>
                <Label>From</Label>
                <Input type="select" onChange={props.updateSender}>
                    {props.sender}
                </Input>
            </FormGroup>
        </Form>
        <Button onClick={props.postKudo} color="success" >Give Kudos</Button>
    </Col>


);
export default KudosForm;