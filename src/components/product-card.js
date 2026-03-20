"use client";
import React from "react";
import Link from "next/link";

const ProductCard = ({ id, title, price, thumbnail, image, discountPercentage, discounted }) => {
	const imgSrc = thumbnail || image || `https://picsum.photos/seed/${id}/600/400`;
	const discountAmount = discountPercentage
		? +(price * discountPercentage / 100).toFixed(2)
		: +(discounted || 0);
	const hasDiscount = discountAmount > 0 && discountAmount < price;
	const finalPrice = hasDiscount ? +(price - discountAmount).toFixed(2) : price;

	return (
		<Link
			href={`/products/${id}`}
			style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
		>
			<div
				style={{
					background: "var(--color-surface)",
					borderRadius: "var(--radius-lg)",
					border: "1px solid var(--color-border)",
					overflow: "hidden",
					transition: "transform var(--transition), box-shadow var(--transition)",
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "translateY(-4px)";
					e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.4)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "translateY(0)";
					e.currentTarget.style.boxShadow = "none";
				}}
			>
				{/* Image */}
				<div
					style={{
						position: "relative",
						height: "200px",
						background: "var(--color-surface-alt)",
						flexShrink: 0,
					}}
				>
					<img
						src={imgSrc}
						alt={title}
						loading="lazy"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
					{hasDiscount && (
						<span
							style={{
								position: "absolute",
								top: "10px",
								left: "10px",
								background: "#ef4444",
								color: "#fff",
								padding: "0.15rem 0.6rem",
								borderRadius: "99px",
								fontSize: "0.72rem",
								fontWeight: 700,
							}}
						>
							-{discountPercentage ? Math.round(discountPercentage) : Math.round((discountAmount / price) * 100)}%
						</span>
					)}
				</div>

				{/* Body */}
				<div
					style={{
						padding: "1rem 1.1rem",
						flexGrow: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<p
						style={{
							margin: "0 0 0.5rem",
							fontWeight: 600,
							fontSize: "0.95rem",
							lineHeight: 1.4,
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
						}}
					>
						{title}
					</p>
					<div className="d-flex align-items-center gap-2 mt-auto">
						<span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--color-accent)" }}>
							${finalPrice}
						</span>
						{hasDiscount && (
							<span style={{ textDecoration: "line-through", color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
								${price}
							</span>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
