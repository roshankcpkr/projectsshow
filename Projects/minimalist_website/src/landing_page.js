import React from 'react';
import './landingpage.css';
import { Button, Container, Card, Image, Stack, Row } from 'react-bootstrap';
import img1 from './brd-img.jpg';


function LandingPage() {
    return (
        <div className="home">
            <Container>
                <div className="board-image">
                    <Image src={img1} width="100%" />
                </div>

                <div className="text">Your Flexibility, Our Excellence
                </div>
                <p>Manage everything directly and easy with Uncard.
                    Set your payment limit, send money to your friend, give monthly
                    salary to your employees. All in real-time.
                </p>
                <div className="buttons">
                    <Stack direction="horizontal" gap={2}>
                        <Button variant="success" >Get Now</Button>
                        <Button variant="success">Download</Button>
                    </Stack>
                </div>
                <div className="cards">
                    <Row>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Subtitle className="mb-2">Easy take control of your money</Card.Subtitle>
                            </Card.Body>
                        </Card>


                        <br />
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Subtitle className="mb-3">Get cashback in each transaction</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        <br />
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Subtitle className="mb-4">Get clarity over your money.</Card.Subtitle>
                            </Card.Body>
                        </Card>


                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default LandingPage;
