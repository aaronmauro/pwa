import React from 'react';
import {Card} from 'react-bootstrap';

const card = (props) => {
    return (
        <Card className="Card">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                {props.children}
            </Card.Body>
        </Card>
    )
};

export default card;
