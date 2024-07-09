"use client";
import { createProductAction } from "@/actions/product-actions";
import React from "react";
import { Button, Form } from "react-bootstrap";

const DashboardProductNew = () => {
	return (
		<>
			<Form action={createProductAction}>
				<Form.Group className="mb-3" controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="title" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control type="number" name="price" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="discounted">
					<Form.Label>Discounted</Form.Label>
					<Form.Control type="number" name="discounted" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="category">
					<Form.Label>Category</Form.Label>
					<Form.Select aria-label="Select a category" name="category">
						<option>Select a category</option>
						<option value="Home">Home</option>
						<option value="Clothing">Clothing</option>
						<option value="Grocery">Grocery</option>
					</Form.Select>
				</Form.Group>

				<Button type="submit">Create</Button>
			</Form>
		</>
	);
};

export default DashboardProductNew;
