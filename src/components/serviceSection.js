import { useState } from "react";

import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function ServiceSection({ backgroundColor }) {
    const [validated, setValidated] = useState(false);
    const [submissionResult, setSubmissionResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            // If the form is not valid, set the validated state to true to display the validation feedback
            setValidated(true);
            return;
        }

        // If the form is valid, proceed with the simulated form submission delay
        setValidated(true);

        // Simulate a form submission delay of 2 seconds (adjust as needed)
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Form submission success
            setSubmissionResult("success");
            // Reset the form and the validation state after successful submission
            form.reset();
            setValidated(false);
        } catch (error) {
            // Form submission failure
            setSubmissionResult("error");
            console.error("Form submission failed:", error);
        }
    };

    const FormGroup = ({ label, placeholder, errorLabel }) => {
        return (
            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>{label}</Form.Label>
                <Form.Control required type="text" placeholder={placeholder} />
                <Form.Control.Feedback type="invalid">
                    {errorLabel}
                </Form.Control.Feedback>
            </Form.Group>
        );
    };

    return (
        <section
            id="contact"
            className="bg-light"
            style={{ padding: "3rem", backgroundColor }}
        >
            {submissionResult === "success" && (
                <Alert
                    variant="success"
                    onClose={() => setSubmissionResult(null)}
                    dismissible
                >
                    Form submitted successfully!
                </Alert>
            )}

            {submissionResult === "error" && (
                <Alert
                    variant="danger"
                    onClose={() => setSubmissionResult(null)}
                    dismissible
                >
                    Form submission failed. Please try again later.
                </Alert>
            )}
            <Container>
                <h2 className="text-center mb-5">Schedule a Service</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom01"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom02"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom03"
                        >
                            <Form.Label>Service Type</Form.Label>
                            <Form.Control as="select" required>
                                <option value="">Select Service Type</option>
                                <option value="Lawn Mowing">Lawn Mowing</option>
                                {/* <option value="Weed Control">
                                    Weed Control
                                </option>
                                <option value="Fertilization">
                                    Fertilization
                                </option> */}
                                {/* Add more service options as needed */}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a service type.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom04"
                        >
                            <Form.Label>Local Address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your local address"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your local address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Additional Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="message"
                            placeholder="Knock before entering property..."
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Container>
        </section>
    );
}

export default ServiceSection;
