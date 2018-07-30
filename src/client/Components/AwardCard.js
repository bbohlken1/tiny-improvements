import React from "react";
import { Card, CardBody } from "reactstrap";

const AwardCard = props => (
    <Card>
        <CardBody>
            <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
            <p>Badge Name</p>
            <h2> {props.title} </h2>
            <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
            <h5> {props.receiver} </h5>
            <p> "{props.comment}"  -  {props.sender}</p>
        </CardBody>
    </Card>
)

export default AwardCard;