import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
    {
        name: "John Doe",
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac purus eget purus mattis aliquet.",
    },
    {
        name: "Jane Smith",
        testimonial:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non semper.",
    },
];

const AboutUsSection = ({ backgroundColor }) => {
    return (
        <Container
            className="my-5"
            fluid
            style={{ padding: "3rem", backgroundColor }}
        >
            <Row xs={1} md={2}>
                <Col>
                    <h2>About Us</h2>
                    <p>
                        As a dedicated and hardworking Texan, I take immense
                        pride in providing exceptional lawn mowing services.
                        With a deep-rooted appreciation for nature and a genuine
                        love for dogs, I bring a unique passion to the field of
                        lawn care. My commitment to maintaining lush, healthy
                        lawns goes hand in hand with my devotion to creating
                        beautiful outdoor spaces that both homeowners and their
                        beloved four-legged companions can enjoy. With years of
                        experience and a genuine enthusiasm for transforming
                        landscapes, I am excited to bring my expertise and love
                        for lawn care to every project I undertake.
                    </p>
                </Col>
                <Col>
                    <h2>Testimonials</h2>
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body>
                                <Card.Text>
                                    "{testimonial.testimonial}"
                                </Card.Text>
                                <Card.Text className="font-weight-bold">
                                    - {testimonial.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUsSection;
