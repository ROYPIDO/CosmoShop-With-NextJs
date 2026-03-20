import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import FlexImage from "./flex-image";
import { FiPackage, FiStar, FiTag } from "react-icons/fi";

const ProductDetails = ({ product }) => {
	const { thumbnail, image, title, category, price, discountPercentage, description, brand, rating, stock } = product;
	const imgSrc = thumbnail || image;
	const discountAmount = discountPercentage ? +(price * discountPercentage / 100).toFixed(2) : 0;
	const finalPrice = discountAmount > 0 ? +(price - discountAmount).toFixed(2) : price;

	return (
		<Row className="g-5">
			<Col md={6}>
				<FlexImage src={imgSrc} alt={title} height="460px" />
			</Col>
			<Col md={6}>
				{category && (
					<div style={{ marginBottom: "0.75rem" }}>
						<Badge
							style={{
								background: "var(--color-surface-alt)",
								color: "var(--color-text-muted)",
								fontWeight: 500,
								textTransform: "capitalize",
								fontSize: "0.8rem",
								padding: "0.4rem 0.8rem",
							}}
						>
							{category}
						</Badge>
					</div>
				)}

				<h2 style={{ fontWeight: 800, marginBottom: "1rem", lineHeight: 1.25 }}>{title}</h2>

				{description && (
					<p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
						{description}
					</p>
				)}

				{/* Price */}
				<div className="d-flex align-items-baseline gap-3 mb-4">
					<span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-accent)" }}>
						${finalPrice}
					</span>
					{discountAmount > 0 && (
						<>
							<span style={{ textDecoration: "line-through", color: "var(--color-text-muted)", fontSize: "1.2rem" }}>
								${price}
							</span>
							<span style={{ background: "#ef4444", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 700 }}>
								-{Math.round(discountPercentage)}%
							</span>
						</>
					)}
				</div>

				{/* Meta info */}
				<div className="d-flex flex-column gap-2 mb-4">
					{brand && (
						<div className="d-flex align-items-center gap-2" style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
							<FiTag size={15} />
							<span>Brand: <strong style={{ color: "var(--color-text)" }}>{brand}</strong></span>
						</div>
					)}
					{rating && (
						<div className="d-flex align-items-center gap-2" style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
							<FiStar size={15} />
							<span>Rating: <strong style={{ color: "var(--color-text)" }}>{rating} / 5</strong></span>
						</div>
					)}
					{stock !== undefined && (
						<div className="d-flex align-items-center gap-2" style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
							<FiPackage size={15} />
							<span>
								Stock:{" "}
								<strong style={{ color: stock > 0 ? "#22c55e" : "#ef4444" }}>
									{stock > 0 ? `${stock} units available` : "Out of stock"}
								</strong>
							</span>
						</div>
					)}
				</div>

				<button
					className="btn btn-warning fw-semibold px-5"
					style={{ fontSize: "1rem" }}
				>
					Add to Cart
				</button>
			</Col>
		</Row>
	);
};

export default ProductDetails;
