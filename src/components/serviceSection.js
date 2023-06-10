import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const services = [
    {
        title: "Lawn Mowing",
        description:
            "Professional lawn mowing services to keep your lawn well-maintained.",
        image: require("../imgs/lawn.jpg"),
    },
    {
        title: "Lawn Fertilization",
        description:
            "Specialized fertilization treatments to promote a healthy and vibrant lawn.",
        image: require("../imgs/lawn.jpg"),
    },
    {
        title: "Weed Control",
        description:
            "Effective weed control solutions to eliminate unwanted weeds from your lawn.",
        image: require("../imgs/lawn.jpg"),
    },
    // Add more services as needed
];

const ServicesSection = ({ backgroundColor }) => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {services.map((service, index) => (
                    <Col key={service.title}>
                        <Card>
                            <Card.Img variant="top" src={service.image} />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ServicesSection;
