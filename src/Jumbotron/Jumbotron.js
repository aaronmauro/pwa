import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import logo from '../mentor_icon.svg';

const jumbotron = (props) => {
    return (
        <Jumbotron className="Jumbotron" fluid>
            <Container>
                <img alt="Mentor logo"
                src={logo}
                width="80em"
                height="80em"
                className="d-inline-block float-left"/>
                <h1>{props.heading_one} {props.user}</h1>
                <p>
                    {props.lead}
                </p>
            </Container>
        </Jumbotron>
    )
};

export default jumbotron;