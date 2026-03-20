"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";

const Slider = () => {
	return (
		<Carousel fade>
			{slides.map((item, i) => (
				<Carousel.Item key={item.id}>
					<div style={{ position: "relative", height: "72vh", minHeight: "420px" }}>
						<Image
							src={`/images/${item.image}`}
							fill
							style={{ objectFit: "cover" }}
							alt={`Slide ${i + 1}`}
							priority={i === 0}
						/>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;
