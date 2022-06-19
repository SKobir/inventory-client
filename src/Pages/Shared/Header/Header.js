import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.gitinit';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">MotorCycle Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#bikes">Bikes</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="invent">Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage Bikes</Nav.Link>
                                    <Nav.Link as={Link} to="addbike">Add Bike</Nav.Link>
                                </>
                            }

                            {
                                user ?
                                    <button onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;