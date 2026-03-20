"use client";
import { createProductAction } from "@/actions/product-actions";
import React from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useFormState } from "react-dom";

const CATEGORIES = [
	{ value: "smartphones", label: "Smartphones" },
	{ value: "laptops", label: "Laptops" },
	{ value: "beauty", label: "Beauty & Health" },
	{ value: "fragrances", label: "Fragrances" },
	{ value: "furniture", label: "Furniture" },
	{ value: "groceries", label: "Groceries" },
	{ value: "home-decoration", label: "Home Decoration" },
	{ value: "kitchen-accessories", label: "Kitchen" },
	{ value: "sports-accessories", label: "Sports" },
	{ value: "tops", label: "Clothing" },
];

const DashboardProductNew = () => {
	const initialState = { ok: false, message: "", errors: {} };
	const [state, dispatch] = useFormState(createProductAction, initialState);

	return (
		<>
			{!state.ok && state.message ? (
				<Alert variant="danger">{state.message}</Alert>
			) : null}
			{state.ok && state.message ? (
				<Alert variant="success">{state.message}</Alert>
			) : null}

			<h4 style={{ fontWeight: 800, marginBottom: "1.5rem" }}>New Product</h4>

			<Form action={dispatch} style={{ maxWidth: "600px" }}>
				<Row className="g-3">
					<Col xs={12}>
						<Form.Group controlId="title">
							<Form.Label>Product Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								placeholder="e.g. Wireless Headphones"
								isInvalid={!!state.errors?.title}
							/>
							<Form.Control.Feedback type="invalid">{state.errors?.title}</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col sm={6}>
						<Form.Group controlId="price">
							<Form.Label>Price ($)</Form.Label>
							<Form.Control
								type="number"
								name="price"
								min="0"
								step="0.01"
								placeholder="0.00"
								isInvalid={!!state.errors?.price}
							/>
							<Form.Control.Feedback type="invalid">{state.errors?.price}</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col sm={6}>
						<Form.Group controlId="discounted">
							<Form.Label>Discount %</Form.Label>
							<Form.Control
								type="number"
								name="discounted"
								min="0"
								max="99"
								placeholder="0"
								isInvalid={!!state.errors?.discounted}
							/>
							<Form.Control.Feedback type="invalid">{state.errors?.discounted}</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col xs={12}>
						<Form.Group controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Select
								name="category"
								isInvalid={!!state.errors?.category}
							>
								<option value="">Select a category</option>
								{CATEGORIES.map((c) => (
									<option key={c.value} value={c.value}>{c.label}</option>
								))}
							</Form.Select>
							<Form.Control.Feedback type="invalid">{state.errors?.category}</Form.Control.Feedback>
						</Form.Group>
					</Col>

					<Col xs={12}>
						<Button type="submit" variant="warning" className="fw-semibold px-4">
							Create Product
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default DashboardProductNew;
