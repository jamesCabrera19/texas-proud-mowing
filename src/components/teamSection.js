import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const teamMembers = [
    {
        name: "John Doe",
        role: "Founder & CEO",
        expertise: "Business Development",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies aliquam lectus in interdum.",
        photo: require("../imgs/lawn.jpg"),
    },
    {
        name: "Jane Smith",
        role: "Marketing Manager",
        expertise: "Digital Marketing",
        bio: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi consectetur nunc.",
        photo: require("../imgs/lawn.jpg"),
    },
];

const TeamSection = () => {
    return (
        <Container className="my-5">
            <h2>Our Team</h2>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col md={6} lg={4} key={index}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={member.photo} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {member.role}
                                </Card.Subtitle>
                                <Card.Text>{member.expertise}</Card.Text>
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
