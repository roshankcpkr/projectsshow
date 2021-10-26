import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-1">
            <Container className="data">
                <Row>
                    <Col>
                        <Col>
                            I design basic website like this.
                        </Col>

                        <Col>
                            <Button variant="success" className="button">
                                About
                            </Button>
                        </Col>

                    </Col>

                    <Col>
                        <div className="heading">
                            SHARE
                        </div>
                        <Col>
                            Twitter
                        </Col>
                        <Col>
                            Facebook
                        </Col>
                        <Col>
                            LinkedIn
                        </Col>

                    </Col>
                    <Col>
                        <div className="heading">
                            LEGAL
                        </div>
                        <Col>
                            Terms
                        </Col>
                        <Col>
                            Privacy
                        </Col>
                        <Col>
                            Guidelines
                        </Col>

                    </Col>

                </Row>
            </Container>

            <div className="text-1">
                Website made by: Nimrat Kaur | @2021 All rights reserved.
            </div>
        </div>
    )
}

export default Footer;
