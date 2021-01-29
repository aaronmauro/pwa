import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import logo from '../mentor_icon.svg';
import {FiFeather,FiInfo,FiMail} from 'react-icons/fi';

const menu = (props) => {
    return (
        <Navbar bg="light" variant="light">

            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>

    <Navbar.Brand href="/">{props.children}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about"><FiFeather /> About</Nav.Link>
                <Nav.Link href="/features"><FiInfo /> Features</Nav.Link>
                <Nav.Link href="/contact"><FiMail /> Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default menu; 