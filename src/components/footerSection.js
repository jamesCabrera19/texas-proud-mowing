import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { footerSectionData as data } from "../companyData";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <p>
                            &copy; {new Date().getFullYear()} {data.companyName}{" "}
                            Company. All rights reserved.
                        </p>
                        <p>{data.OWNER}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
