import React from 'react';
import { Container, Col } from 'react-bootstrap';
import img1 from './snapchat.jpg';
import img2 from './youtube.jpg';
import img3 from './facebook.jpg';
import img4 from './instagram.jpg';
import img6 from './netflix.jpg';
import img7 from './tiktok.jpg';
import img8 from './twitter.jpg';
import './middle-board.css';

function Middleboard() {
    return (
        <div className="second-board">
            <div className="text-7">Our Customers</div>
            <Container>
                <Col>
                    <div className="upper">
                        <Col>

                            <img src={img2} alt="" width="150px" height="150px" />
                            <img src={img3} alt="" width="150px" height="150px" />
                            <img src={img4} alt="" width="150px" height="150px" />
                        </Col>
                    </div>
                    <div className="lower">
                        <Col>
                            <img src={img6} alt="" width="150px" height="150px" />
                            <img src={img1} alt="" width="150px" height="150px" />
                            <img src={img7} alt="" width="150px" height="150px" />
                            <img src={img8} alt="" width="150px" height="150px" />
                        </Col>
                    </div>
                </Col>
            </Container>

        </div>
    )
}

export default Middleboard;
