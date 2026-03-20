"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";

const captions = [
	{
		tag: "New Arrivals",
		heading: "Discover the Latest",
		sub: "Curated products, built with taste.",
	},
	{
		tag: "Trending Now",
		heading: "Shop What's Hot",
		sub: "Find deals that match your style.",
	},
];

const Slider = () => {
	return (
		<Carousel fade>
			{slides.map((item, i) => {
				const cap = captions[i] ?? captions[0];
				return (
					<Carousel.Item key={item.id}>
						<div style={{ position: "relative", height: "72vh", minHeight: "420px" }}>
							<Image
								src={`/images/${item.image}`}
								fill
								style={{ objectFit: "cover" }}
								alt={cap.heading}
								priority={i === 0}
							/>
							{/* Dark overlay */}
							<div
								style={{
									position: "absolute",
									inset: 0,
									background:
										"linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
								}}
							/>
							{/* Caption */}
							<div
								style={{
									position: "absolute",
									top: "50%",
									left: "8%",
									transform: "translateY(-50%)",
									maxWidth: "520px",
								}}
							>
								<span
									style={{
										background: "var(--color-accent)",
										color: "#000",
										padding: "0.2rem 0.75rem",
										borderRadius: "99px",
										fontSize: "0.75rem",
										fontWeight: 700,
										letterSpacing: "0.08em",
										textTransform: "uppercase",
									}}
								>
									{cap.tag}
								</span>
								<h1
									style={{
										fontSize: "clamp(2rem, 5vw, 3.5rem)",
										fontWeight: 800,
										lineHeight: 1.15,
										marginTop: "0.75rem",
										marginBottom: "0.5rem",
										color: "#fff",
									}}
								>
									{cap.heading}
								</h1>
								<p
									style={{
										color: "rgba(255,255,255,0.75)",
										marginBottom: "1.5rem",
										fontSize: "1.05rem",
									}}
								>
									{cap.sub}
								</p>
								<Link
									href="/products"
									className="btn btn-warning px-4 fw-semibold"
									style={{ fontSize: "1rem" }}
								>
									Shop Now
								</Link>
							</div>
						</div>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default Slider;
