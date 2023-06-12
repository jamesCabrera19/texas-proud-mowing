import Image from "react-bootstrap/Image";
import { Container, Button } from "react-bootstrap";
import React from "react";

const imageSrc = require("../imgs/lawn3.jpg");
const Img = (
    <Image
        src={require("../imgs/lawn.jpg")}
        fluid
        className="position-absolute top-1 start-0"
    />
);

export default function HeroSection({ onClick }) {
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
                        backgroundColor: "rgba(89, 89, 89, 0.4)",
                        borderRadius: 10,
                    }}
                >
                    <h1 className="display-4 mb-4">
                        Welcome to Butters Lawn Care
                    </h1>
                    <h2 lassName="display-4 mb-4">
                        Quality Service for Your Lawn
                    </h2>
                    <p className="lead mb-6">
                        We provide affordable top-quality lawn care solutions
                        for a greener and healthier lawn.
                    </p>
                    <Button
                        variant="light"
                        className="btn-purple"
                        onClick={onClick}
                    >
                        Get Started
                    </Button>
                </Container>
            </div>
        </div>
    );
}
