import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { galleryImgs } from "../companyData";

const GallerySection = ({ backgroundColor }) => {
    return (
        <div style={{ padding: "3rem 0", backgroundColor }}>
            <Container>
                <h2 className="text-center mb-5">Gallery</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={galleryImgs.before}
                            alt="Before"
                            style={{ borderRadius: 10 }}
                        />
                        <Carousel.Caption>
                            <h3>Before</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={galleryImgs.after}
                            alt="After"
                            style={{ borderRadius: 10 }}
                        />
                        <Carousel.Caption>
                            <h3>After</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Add more Carousel.Items for additional photos */}
                </Carousel>
            </Container>
        </div>
    );
};

export default GallerySection;
