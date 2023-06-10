import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="bg-light"
            style={{ margin: "3rem 0 3rem", backgroundColor: "transparent" }}
        >
            <Container>
                <h2 className="text-center mb-5">Contact Us</h2>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter your message"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h5>Contact Information</h5>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                        <p>Address: 123 Main Street, City, State</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
