import { Container, Row, Col, Card } from "react-bootstrap";
import { aboutUsSectionData as data } from "../companyData";

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
                    <p>{data.aboutUs}</p>
                </Col>
                <Col>
                    <h2>Testimonials</h2>
                    {data.testimonials.map((testimonial, index) => (
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
