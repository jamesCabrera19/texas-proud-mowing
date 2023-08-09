import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { DEVELOPER_KEYS } from "../companyData";

// Form data for first and second rows
const data = {
    firstRow: [
        {
            type: "text",
            label: "Name",
            name: "name", // Add this line
            controlId: "validationCustom01",
            placeholder: "Enter your name",
            feedbackLabel: "Please provide your name.",
        },
        {
            type: "tel", // Change the type to "tel" for phone number input
            label: "Phone Number", // Change the label to "Phone Number"
            name: "phone", // Change the name to "phone" for form value
            controlId: "validationCustom02",
            placeholder: "Enter your phone number", // Change the placeholder
            feedbackLabel: "Please provide a valid phone number.", // Change the feedback label
        },
    ],
    secondRow: [
        {
            type: "select",
            label: "Service Type",

            controlId: "validationCustom03",
            placeholder: "Select Service Type",
            feedbackLabel: "Please select a service type.",
            options: [
                { value: "", label: "Select Service Type" },
                {
                    value: "Lawn Mowing",
                    label: "Lawn Mowing",
                },

                // Add more service options as needed
            ],
        },
        {
            type: "text",
            label: "Local Address",
            name: "address",
            controlId: "validationCustom04",
            placeholder: "Enter your local address",
            feedbackLabel: "Please provide your address.",
        },
    ],
};

function ServiceSection({ backgroundColor }) {
    const [validated, setValidated] = useState(false);
    const [submissionResult, setSubmissionResult] = useState(null);
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = DEVELOPER_KEYS;

    // Function to handle form submission
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

        try {
            // await new Promise((resolve) => setTimeout(resolve, 2000));
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

            // Form submission success
            setSubmissionResult("success");
            // Reset the form and the validation state after successful submission
            form.reset();
            setValidated(false);
            console.log("Sent:");
        } catch (error) {
            // Form submission failure
            setSubmissionResult("error");
            console.error("Form submission failed:", error);
        }
    };

    // Helper function to render invalid feedback
    const renderInvalid = (label) => (
        <Form.Control.Feedback type="invalid">{label}</Form.Control.Feedback>
    );

    // Helper function to render form group elements
    const renderFormGroup = (el) => {
        return (
            <Form.Group
                key={el.controlId}
                as={Col}
                md="6"
                controlId={el.controlId}
            >
                <Form.Label>{el.label}</Form.Label>
                <Form.Control
                    required
                    type={el.type}
                    placeholder={el.placeholder}
                    name={el.name}
                />
                {renderInvalid(el.feedbackLabel)}
            </Form.Group>
        );
    };

    return (
        <section
            id="contact"
            className="bg-light"
            style={{ padding: "3rem", backgroundColor }}
        >
            {/* Alert for successful form submission */}
            {submissionResult === "success" && (
                <Alert
                    variant="success"
                    onClose={() => setSubmissionResult(null)}
                    dismissible
                >
                    Service requested successfully! Our team will get in touch
                    with you shortly!
                </Alert>
            )}

            {/* Alert for form submission failure */}
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
                {/* Form with form validation */}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* First Row Data */}
                    <Row className="mb-3">
                        {data.firstRow.map((el) => renderFormGroup(el))}
                    </Row>

                    {/* Second Row Data*/}
                    <Row className="mb-3">
                        {data.secondRow.map((el) => (
                            <React.Fragment key={el.controlId}>
                                {el.type === "select" ? (
                                    // Render form group for select type
                                    <Form.Group
                                        key={el.controlId}
                                        controlId={el.controlId}
                                        as={Col}
                                        md="6"
                                    >
                                        <Form.Label>{el.label}</Form.Label>
                                        <Form.Control
                                            as="select"
                                            required
                                            type="hidden"
                                            name="service"
                                        >
                                            {el.options.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </Form.Control>
                                        {renderInvalid(el.feedbackLabel)}
                                    </Form.Group>
                                ) : (
                                    // Render form group for other types
                                    renderFormGroup(el)
                                )}
                            </React.Fragment>
                        ))}
                    </Row>

                    {/* Additional Notes */}
                    <Form.Group className="mb-3">
                        <Form.Label>Additional Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="message"
                            placeholder="Knock before entering the property..."
                        />
                    </Form.Group>
                    <Button type="submit">Schedule Service</Button>
                </Form>
            </Container>
        </section>
    );
}

export default ServiceSection;
