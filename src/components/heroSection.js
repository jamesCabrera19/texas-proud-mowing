import Image from "react-bootstrap/Image";
import { Container, Button } from "react-bootstrap";
import React from "react";
import { heroData } from "../companyData";
import "../mediaQueries.css";

const src = require("../imgs/lawn3.jpg");

export default function HeroSection({ onClick }) {
    const { data } = heroData;

    return (
        <div
            style={{ position: "relative", backgroundColor: "#FFFFFF" }}
            className="large-screen"
        >
            <Image src={src} fluid="true" className="background-image" />
            <Container
                className="overlay text-center text-white d-flex flex-column align-items-center justify-content-center"
                style={{
                    position: "absolute",
                    bottom: 0,
                    borderRadius: 10,
                    padding: "1rem",
                    maxWidth: "80%",
                    maxHeight: "90%",
                }}
            >
                <h1 className="text display-5 mb-3">{data.mainTitle}</h1>
                <h2 className="h4 mb-3">{data.slogan}</h2>
                <p className="lead mb-4">{data.subSlogan}</p>
                <Button
                    // variant="light"
                    className="btn-purple"
                    onClick={onClick}
                    size="lg"
                >
                    Get Started
                </Button>
            </Container>
        </div>
    );
}
