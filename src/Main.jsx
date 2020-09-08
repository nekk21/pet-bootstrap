import React from 'react';
import Slider  from './Components/slider';
import Jumbotron from './Components/Jumbotron'
import { Container, Col, Row, Card, Button} from 'react-bootstrap';
import kosmos from './kosmos.jpg'

export const Main = () =>(
<>
    <Slider/>

    <Container style = {{padding:"2rem"}}>
        <Row>
            <Col>
                <Card style = {{width: "18rem"}}>
                    <Card.Img variant="top" src={kosmos}/>

                    <Card.Body>
                        <Card.Title>Nekk Blog</Card.Title>
                        <Card.Text>
                            Stroka
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>

                </Card>
            </Col>

            <Col>
                <Card style = {{width: "18rem"}}>
                    <Card.Img variant="top" src={kosmos}/>

                    <Card.Body>
                        <Card.Title>Nekk Blog</Card.Title>
                        <Card.Text>
                            Stroka
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>

                </Card>
            </Col>

            <Col>
                <Card style = {{width: "18rem"}}>
                    <Card.Img variant="top" src={kosmos}/>

                    <Card.Body>
                        <Card.Title>Nekk Blog</Card.Title>
                        <Card.Text>
                            Stroka
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>

                </Card>
            </Col>

        </Row>
    </Container>

    <Jumbotron/>

    <Container style={{marginBottom:"30px"}} > 
        <Row>
            <Col md={7}>
                <img alt="img"  src= {kosmos} height = {400}/>
            </Col>

            <Col md={5}>
                <h2>Nekk Blog</h2>
                <p> Level-appropriate. It can be difficult to know which
                    book is the right level for you, which is why graded
                    readers that are made especially for Spanish learners
                    can be useful. Ideally, you should understand
                    roughly 70% of the words on the page. If you’re not
                    sure, try reading the first page before you buy the book.
                    If you can grasp the idea, more or less, that’s a good start!
                    If you want to just get used to reading in Spanish, it might be
                    a good idea to choose a book that you find fairly
                    simple to help ease you into the reading habit.</p>
            </Col>
        </Row>
    </Container>
</>
   
)