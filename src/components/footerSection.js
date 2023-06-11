import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-start">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms-of-service">Terms of Service</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <p>
                            &copy; {new Date().getFullYear()} Texas Proud Mowing
                            Company. All rights reserved.
                        </p>
                        <p>James Cabrera</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
