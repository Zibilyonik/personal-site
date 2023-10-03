import '../assets/css/navbar.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem eventKey={1} href="#">
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <Link to="/users">Projects</Link>
                </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;