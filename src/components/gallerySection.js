import React from "react";
import { Container, Carousel } from "react-bootstrap";

const GallerySection = ({ backgroundColor }) => {
    return (
        <section
            id="gallery"
            className="bg-light"
            style={{ backgroundColor: backgroundColor }}
        >
            <Container>
                <h2 className="text-center mb-5">Gallery</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../imgs/lawn.jpg")}
                            alt="Before Image"
                        />
                        <Carousel.Caption>
                            <h3>Before</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../imgs/lawn.jpg")}
                            alt="After Image"
                        />
                        <Carousel.Caption>
                            <h3>After</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Items for additional photos */}
                </Carousel>
            </Container>
        </section>
    );
};

export default GallerySection;
