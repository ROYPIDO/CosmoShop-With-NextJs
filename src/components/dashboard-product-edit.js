"use client";
import { updateProductAction } from "@/actions/product-actions";
import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useFormState } from "react-dom";

const DashboardProductEdit = ({ product }) => {
	const initialState = { ok: false, message: "", errors: {} };

	const [state, dispatch] = useFormState(updateProductAction, initialState);

	console.log(product)

	return (
		<>
			{!state.ok && state.message ? (
				<Alert variant="danger">{state.message}</Alert>
			) : null}

			{state.ok && state.message ? (
				<Alert variant="success">{state.message}</Alert>
			) : null}

			<Form action={dispatch}>
				<input type="hidden" name="id" defaultValue={product.id}/>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						name="title"
						defaultValue={product.title}
						isInvalid={!!state.errors.title}
					/>
					<Form.Control.Feedback type="invalid">
						{state.errors.title}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						name="price"
						defaultValue={product.price}
						isInvalid={!!state.errors.price}
					/>
					<Form.Control.Feedback type="invalid">
						{state.errors.price}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="discounted">
					<Form.Label>Discounted</Form.Label>
					<Form.Control
						type="number"
						name="discounted"
						defaultValue={product.discounted}
						isInvalid={!!state.errors.discounted}
					/>
					<Form.Control.Feedback type="invalid">
						{state.errors.discounted}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="category">
					<Form.Label>Category</Form.Label>
					<Form.Select
						aria-label="Select a category"
						name="category"
						defaultValue={product.category}
						isInvalid={!!state.errors.category}
					>
						<option value="">Select a category</option>
						<option value="Home">Home</option>
						<option value="Clothing">Clothing</option>
						<option value="Grocery">Grocery</option>
					</Form.Select>
					<Form.Control.Feedback type="invalid">
						{state.errors.category}
					</Form.Control.Feedback>
				</Form.Group>

				<Button type="submit">Update</Button>
			</Form>
		</>
	);
};

export default DashboardProductEdit;
