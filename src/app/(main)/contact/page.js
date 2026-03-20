"use client";
import PageHeader from "@/components/page-header";
import React, { useState } from "react";
import { Alert, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contactInfo = [
	{ icon: FiMail, label: "Email", value: "hello@cosmoshop.dev" },
	{ icon: FiPhone, label: "Phone", value: "+1 (555) 234-5678" },
	{ icon: FiMapPin, label: "Address", value: "San Francisco, CA" },
];

const Page = () => {
	const [sent, setSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<>
			<PageHeader
				title="Contact Us"
				subtitle="We will get back to you within 24 hours"
			/>

			<div className="container-narrow py-4">
				<Row className="g-5">
					{/* Contact info */}
					<Col md={4}>
						<h4 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>
							Get in Touch
						</h4>
						<div className="d-flex flex-column gap-4">
							{contactInfo.map(({ icon: Icon, label, value }) => (
								<div key={label} className="d-flex align-items-start gap-3">
									<div
										style={{
											background: "var(--color-surface)",
											borderRadius: "var(--radius)",
											padding: "0.6rem",
											color: "var(--color-accent)",
											flexShrink: 0,
										}}
									>
										<Icon size={20} />
									</div>
									<div>
										<div
											style={{
												fontSize: "0.75rem",
												color: "var(--color-text-muted)",
												marginBottom: "0.1rem",
												textTransform: "uppercase",
												letterSpacing: "0.05em",
											}}
										>
											{label}
										</div>
										<div style={{ fontWeight: 500 }}>{value}</div>
									</div>
								</div>
							))}
						</div>
					</Col>

					{/* Form */}
					<Col md={8}>
						{sent ? (
							<Alert
								variant="success"
								className="text-center py-5"
								style={{ borderRadius: "var(--radius-lg)" }}
							>
								<div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
									✅
								</div>
								<h5 className="mb-1">Message sent successfully!</h5>
								<p className="mb-0 text-muted">
									Thanks for reaching out. We&apos;ll reply shortly.
								</p>
							</Alert>
						) : (
							<Form onSubmit={handleSubmit}>
								<Row className="g-3">
									<Col sm={6}>
										<FloatingLabel controlId="name" label="Full Name">
											<Form.Control
												type="text"
												placeholder="Full Name"
												required
											/>
										</FloatingLabel>
									</Col>
									<Col sm={6}>
										<FloatingLabel controlId="email" label="Email address">
											<Form.Control
												type="email"
												placeholder="email@example.com"
												required
											/>
										</FloatingLabel>
									</Col>
									<Col xs={12}>
										<FloatingLabel controlId="subject" label="Subject">
											<Form.Control
												type="text"
												placeholder="Subject"
												required
											/>
										</FloatingLabel>
									</Col>
									<Col xs={12}>
										<FloatingLabel controlId="message" label="Message">
											<Form.Control
												as="textarea"
												placeholder="Your message"
												style={{ height: "140px" }}
												required
											/>
										</FloatingLabel>
									</Col>
									<Col xs={12}>
										<Button
											type="submit"
											variant="warning"
											className="px-5 text-uppercase fw-semibold"
										>
											Send Message
										</Button>
									</Col>
								</Row>
							</Form>
						)}
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Page;
