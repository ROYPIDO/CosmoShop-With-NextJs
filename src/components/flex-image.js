import Image from "next/image";
import React from "react";

const FlexImage = ({
	src,
	alt,
	width = "100%",
	height = "100%",
	fit = "cover",
}) => {
	return (
		<div style={{ position: "relative", width, height }}>
			<Image src={src} alt={alt} fill style={{ objectFit: fit }} />
		</div>
	);
};

export default FlexImage;
