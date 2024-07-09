"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";

const Slider = () => {
	return (
		<Carousel>
			{slides.map((item) => (
				<Carousel.Item key={item.id}>
					<div style={{ position: "relative", height: "50vh" }}>
						<Image
							src={`/images/${item.image}`}
							fill
							style={{ objectFit: "cover" }}
							alt="photo"
						/>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;
