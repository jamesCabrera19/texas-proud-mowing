import Image from "react-bootstrap/Image";
import { Container, Button } from "react-bootstrap";
import React from "react";
import { heroData } from "../companyData";

const src = require("../imgs/lawn3.jpg");

export default function HeroSection({ onClick }) {
    const { data } = heroData;

    return (
        <div>
            <div className="position-relative" fluid="true">
                <Image src={src} fluid="true" />
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
                    <h1 className="display-4 mb-4">{data.mainTitle}</h1>
                    <h2 className="display-4 mb-4">{data.slogan}</h2>
                    <p className="lead mb-6">{data.subSlogan}</p>
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
