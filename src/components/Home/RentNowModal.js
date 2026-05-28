import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const RENT_EMAIL = "littlethingsbypriya@gmail.com";
const RENTAL_POLICY_URL = `${process.env.PUBLIC_URL}/rent-catalog.pdf`;

const RENT_DURATIONS = [
  "2 hours",
  "3 hours",
  "4 hours",
  "5 hours",
  "6 hours",
  "7 hours",
  "8 hours",
  "9 hours",
  "10 hours",
  "11 hours",
  "12 hours",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  rentDuration: "",
  location: "",
  message: "",
};

function RentNowModal({ show, onHide }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [form, setForm] = useState(initialForm);

  const resetAndClose = () => {
    setSubmitted(false);
    setError("");
    setSubmitting(false);
    setPolicyAccepted(false);
    setForm(initialForm);
    onHide();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!policyAccepted) {
      setError("Please read and accept the rental policy before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(RENT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || "Not provided",
            location: form.location,
            eventDate: form.eventDate || "Not specified",
            rentDuration: form.rentDuration,
            message: form.message || "—",
            policyAccepted: "Yes",
            _subject: "New Rent Now inquiry – Little Things by Priya Shah",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not send your request. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={resetAndClose}
      centered
      size="lg"
      className="rent-now-modal"
      contentClassName="rent-now-modal-content"
    >
      <Modal.Header closeButton closeVariant="white" className="rent-now-modal-header">
        <Modal.Title>
          {submitted ? "Request received" : "Rent the 360 Photo Booth"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="rent-now-modal-body">
        {submitted ? (
          <div className="rent-now-success-view">
            <p className="rent-now-success">
              Thank you, {form.name}! Your rental request has been sent. We&apos;ll
              be in touch soon.
            </p>
            <Button
              onClick={resetAndClose}
              className="rent-now-submit-btn w-100"
            >
              Close
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <p className="rent-now-intro">
              Fill in your details and we&apos;ll get back to you about your event.
            </p>

            <Form.Group className="mb-3" controlId="rentName">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="rent-now-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rent-now-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (306) 580 1402 (optional)"
                className="rent-now-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentLocation">
              <Form.Label>Event location *</Form.Label>
              <Form.Control
                required
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Street address, city, province, postal code"
                className="rent-now-input"
                autoComplete="street-address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentEventDate">
              <Form.Label>Event date</Form.Label>
              <Form.Control
                type="date"
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                className="rent-now-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentDuration">
              <Form.Label>Rent duration *</Form.Label>
              <Form.Select
                required
                name="rentDuration"
                value={form.rentDuration}
                onChange={handleChange}
                className="rent-now-input"
              >
                <option value="" disabled>
                  Select duration
                </option>
                {RENT_DURATIONS.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your event (optional)"
                className="rent-now-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentPolicy">
              <Form.Check
                type="checkbox"
                id="rentPolicy"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
                className="rent-now-policy-check"
                label={
                  <span className="rent-now-policy-label">
                    I have read and agree to the{" "}
                    <a
                      href={RENTAL_POLICY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rent-policy-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      rental policy
                    </a>
                    . *
                  </span>
                }
              />
            </Form.Group>

            {error && <p className="rent-now-error">{error}</p>}

            <Button
              type="submit"
              disabled={submitting || !policyAccepted}
              className="rent-now-submit-btn w-100"
            >
              {submitting ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Sending…
                </>
              ) : (
                "Submit request"
              )}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default RentNowModal;
