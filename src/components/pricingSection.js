import { useState } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { priceServices } from "../companyData";

const ServicesCard = ({ data, onClick }) => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {data.map((service) => (
                <Col key={service.title}>
                    <Card>
                        <Card.Img variant="top" src={service.image} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                            <Card.Title className="text-center my-4">
                                {service.price}
                            </Card.Title>
                            <Button
                                className="center"
                                variant="primary"
                                onClick={() => onClick(service)}
                            >
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
const ModalComponent = ({ showModal, onClick, data }) => {
    const { modalTitle, modalBody } = data;
    return (
        <Modal show={showModal} onHide={onClick} centered>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalBody}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClick}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const PricingSection = ({ backgroundColor }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleShowModal = (service) => {
        setModalData(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div style={{ padding: "3rem", backgroundColor }}>
            <Container className="my-5">
                <h2 className="text-center mb-5">Our Services</h2>
                <ServicesCard onClick={handleShowModal} data={priceServices} />
            </Container>
            <ModalComponent
                showModal={showModal}
                onClick={handleCloseModal}
                data={modalData}
            />
        </div>
    );
};

export default PricingSection;
