"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./product-card";

const ProductsInSameCategory = ({ products }) => {
	return (
		<div>
			<h4 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>You May Also Like</h4>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				breakpoints={{
					576: { slidesPerView: 2 },
					992: { slidesPerView: 3 },
					1200: { slidesPerView: 4 },
				}}
			>
				{products.map((item) => (
					<SwiperSlide key={item.id}>
						<ProductCard {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductsInSameCategory;
