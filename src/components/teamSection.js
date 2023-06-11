import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const teamMembers = [
    {
        name: "Butters",
        role: "Founder",
        // expertise: "Business Development",
        bio: "woof woof",
        photo: require("../imgs/butters.jpeg"),
    },
    {
        name: "James Cabrera",
        role: "Co-founder",
        expertise: "Digital Marketing",
        bio: "howdy!",
        photo: require("../imgs/butters.jpeg"),
    },
];

const TeamSection = ({ backgroundColor }) => {
    return (
        <Container
            className="my-5"
            fluid
            style={{ padding: "3rem", backgroundColor }}
        >
            <h2>Our Team</h2>
            <Row xs={1} md={2}>
                {teamMembers.map((member, index) => (
                    <Col md={6} lg={4} key={index}>
                        <Card className="mb-3" style={{}}>
                            <Card.Img
                                variant="top"
                                src={member.photo}
                                style={{ height: "75%" }}
                            />

                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {member.role}
                                </Card.Subtitle>
                                <Card.Text>{member.bio}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TeamSection;
