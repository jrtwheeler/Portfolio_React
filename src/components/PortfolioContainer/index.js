import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FriendCard(props) {
    console.log(props)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Button variant={props.github} target="_blank">Open Github Repo</Button>
                <br />
                <Button variant={props.webpage} target="_blank">Open Web App</Button>
            </Card.Body>
        </Card>
    );
}

export default FriendCard;