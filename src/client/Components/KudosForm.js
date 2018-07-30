import React from "react";
import {
    Col, Container, Row, Form, FormGroup, Input, Label, Button, Card,
    CardBody
} from "reactstrap";
const KudosForm = props => (
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
)
export default KudosForm;