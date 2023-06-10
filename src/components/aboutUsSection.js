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

const AboutUsSection = () => {
    return (
        <Container
            className="my-5"
            fluid
            style={{ backgroundColor: "transparent" }}
        >
            <Row xs={1} md={2}>
                <Col>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Nullam malesuada
                        facilisis velit, vel consequat mi consequat nec. Ut
                        malesuada nisi nec lectus finibus, non rutrum felis
                        pulvinar. Aliquam ullamcorper malesuada dui, at
                        fermentum massa posuere sed. Curabitur maximus dolor ac
                        tellus varius, in ullamcorper purus pulvinar. Integer
                        efficitur semper urna, id lobortis odio eleifend sed.
                        Nullam nec risus lacus. Integer malesuada lacinia
                        elementum. Quisque vitae fringilla odio.
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
