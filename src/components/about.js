import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// import PersonCard from './PersonCard';

const About = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col xs={12} sm={6}>
                    <Image src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" thumbnail />
                </Col>
                <Col xs={12} sm={6}>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        dictum tellus vel libero congue, vel sagittis elit gravida. Sed
                        posuere, magna et rutrum blandit, lacus ligula congue enim, a
                        pharetra magna sapien eget nulla.
                    </p>
                    <Button variant="primary">Learn More</Button>
                </Col>

            </Row>
            {/* <Row>
                <div className="card-grid">

                    <Col>
                        <PersonCard
                            imgSrc="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Worker 1"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            button="LearnMore"
                            button_link="apple.com"
                        />
                    </Col>
                    <Col>
                        <PersonCard
                            imgSrc="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Worker 2"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            button="LearnMore"
                            button_link="apple.com"
                        />
                    </Col>
                    <Col>
                        <PersonCard
                            imgSrc="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            name="Worker 3"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            button="LearnMore"
                            button_link="apple.com"
                        />
                    </Col>
                </div>
            </Row> */}
        </Container>

    );
};

export default About;
