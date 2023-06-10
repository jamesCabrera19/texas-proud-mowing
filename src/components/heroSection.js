import Image from "react-bootstrap/Image";
import { Container, Button } from "react-bootstrap";
import React from "react";

const imageSrc = require("../imgs/lawn.jpg");
const Img = (
    <Image
        src={require("../imgs/lawn.jpg")}
        fluid
        className="position-absolute top-1 start-0"
    />
);
const title = (
    <h1 className="display-4 mb-4">Welcome to My Lawn Care Services</h1>
);
const description = (
    <p className="lead mb-6">
        We provide affordable top-quality lawn care solutions for a greener and
        healthier lawn.
    </p>
);

export default function HeroSection() {
    return (
        <div>
            <div className="position-relative" fluid>
                <Image src={imageSrc} fluid />
                <Container
                    className="text-center text-white display-4"
                    style={{
                        position: "absolute",
                        bottom: "2rem",
                        margin: "0 2rem",
                    }}
                >
                    <h1 className="display-4 mb-4">
                        Welcome to My Lawn Care Services
                    </h1>
                    <p className="lead mb-6">
                        We provide affordable top-quality lawn care solutions
                        for a greener and healthier lawn.
                    </p>
                    <Button variant="light" className="btn-purple">
                        Get Started
                    </Button>
                </Container>
            </div>
        </div>
    );
}
