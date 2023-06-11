import React from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";

const PricingSection = () => {
    const services = [
        {
            title: "Lawn Fertilization",
            description: "Price is based on square footage",
            priceDescription: "Price in this area is around X amount",
            image: require("../imgs/lawn4.jpg"),
            modalTitle: "Lawn Fertilization Pricing",
            modalBody:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tristique justo, vel tincidunt purus dignissim eu.",
        },
        {
            title: "All Services",
            description:
                "Get all our services bundled together at a discounted price.",
            price: "Contact us for pricing",
            priceNote: "Save more by choosing our comprehensive package.",
            image: require("../imgs/lawn.jpg"),
        },
        {
            title: "Lawn Mowing",
            description: "Frontyard: $25, Backyard: $25, Both: $45",
            priceDescription: "Price includes full yard mowing",
            image: require("../imgs/lawn.jpg"),
            modalTitle: "Lawn Mowing Pricing",
            modalBody:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tristique justo, vel tincidunt purus dignissim eu.",
        },
        {
            title: "Weed Control",
            description: "Pricing varies. Contact us for details.",
            priceDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: require("../imgs/lawn4.jpg"),
            modalTitle: "Weed Control Pricing",
            modalBody:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tristique justo, vel tincidunt purus dignissim eu.",
        },
    ];

    const [showModal, setShowModal] = React.useState(false);
    const [modalData, setModalData] = React.useState({});

    const handleShowModal = (service) => {
        setModalData(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section>
            <Container>
                <h2 className="text-center">Our Services</h2>
                <Row xs={1} md={2} lg={3} className="g-3">
                    {services.map((service, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src={service.image} />
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                    <Card.Text>{service.price}</Card.Text>
                                    <Card.Text>{service.priceNote}</Card.Text>
                                    <Button variant="primary">
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PricingSection;
