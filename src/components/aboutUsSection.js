import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
    {
        name: "Butters",
        testimonial: "Woof woof woof woof woof!",
    },
    {
        name: "Wife",
        testimonial: "They did an okay job mowing the yard",
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
                        With unwavering commitment and a strong work ethic, I
                        take immense pride in providing exceptional lawn mowing
                        services. I have a genuine love for nature and a special
                        fondness for dogs, which fuels my passion for lawn care.
                        I work tirelessly to nurture lush, vibrant lawns,
                        creating beautiful outdoor spaces that homeowners and
                        their beloved dogs can enjoy. With years of experience
                        and a true enthusiasm for transforming landscapes, I
                        eagerly take on every project, eager to share my
                        expertise and love for lawn care.
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
