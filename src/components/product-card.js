"use client";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import Link from "next/link";
const ProductCard = ({ id, title, price, image }) => {
	return (
		<Card as={Link} href={`/products/${id}`}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle>
					<Badge>${price}</Badge>
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
