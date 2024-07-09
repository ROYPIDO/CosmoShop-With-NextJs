"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./product-card";

const ProductsInSameCategory = ({ products }) => {
	return (
		<div>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
