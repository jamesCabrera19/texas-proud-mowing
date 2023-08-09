import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { teamMembers } from "../companyData";

const TeamCards = ({ teamMembers }) => (
    <>
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
    </>
);
const TeamSection = ({ backgroundColor }) => {
    return (
        <Container
            className="my-5"
            fluid
            style={{ padding: "3rem", backgroundColor }}
        >
            <h2>Our Team</h2>
            <Row xs={1} md={2}>
                <TeamCards teamMembers={teamMembers} />
            </Row>
        </Container>
    );
};

export default TeamSection;
