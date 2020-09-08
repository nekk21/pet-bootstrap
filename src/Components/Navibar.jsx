import React, {useState} from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Styles = styled.div `
    a, .navber-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &hover {
            color: white
        }
    }
`

function Navibar(){

    const [show, setShow] = useState(false) 

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <>
            <Styles>

                <Navbar collapseOnSelect expand= "lg" variant= "dark" bg="dark">
                    <Container>
                        <Navbar.Brand> Nekk Blog </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id = "responsive-navbar-nav">

                            <Nav className="mr-auto" >
                                <Nav.Link > <Link to='/'><strong >Main</strong> </Link> </Nav.Link>
                                <Nav.Link> <Link to='/users'>Users</Link> </Nav.Link>
                                <Nav.Link> <Link to='/about'>About</Link> </Nav.Link>
                            </Nav>

                            <Nav>
                                <Button variant="primary" className="mr-2" onClick ={handleShow}> Log In </Button>
                                <Button variant="primary" onClick={handleShow}> Sign out </Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>  

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email-muted" placeholder="Enter email"/>
                            <Form.Text className="text-muted">We`ll never shared your email with anyone else</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>

                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleClose}>Log in</Button>
                    </Form>
                </Modal.Body>

            </Modal>

        </>
    )}

export default Navibar;
