import React from "react";
import { Card, CardBody } from "reactstrap";

const PetCard = props => (
    <Card>
        <CardBody>
            <h1> {props.name} </h1>
            <p> {props.age}</p>
        </CardBody>
    </Card>
)

export default PetCard;