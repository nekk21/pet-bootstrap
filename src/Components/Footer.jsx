import React from 'react';
import {Container} from 'react-bootstrap'

export const Footer = () => (
    <>
        <Container fluid style = {{backgroundColor: '#212529', color:"white"}}>
            <Container style={{display: 'flex', justifyContent: "center", padding: "10px"}}>
                <p>NekkBlog</p>
            </Container>      
        </Container>
    </>
)
