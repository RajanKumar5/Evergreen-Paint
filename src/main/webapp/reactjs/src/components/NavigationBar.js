import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to={"/login"} className="navbar-brand">
                        <img src="data:image/png;base64,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" width="25px" height="25px" alt="" /> Evergreen Paint
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Link to={"/login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>
                            <Link to={"/signup"} className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Signup</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar