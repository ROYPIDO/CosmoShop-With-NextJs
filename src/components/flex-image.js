import React from "react";

const FlexImage = ({
	src,
	alt,
	width = "100%",
	height = "100%",
	fit = "cover",
}) => {
	return (
		<div style={{ position: "relative", width, height, overflow: "hidden" }}>
			<img
				src={src || `https://picsum.photos/seed/cosmo/600/400`}
				alt={alt}
				style={{ width: "100%", height: "100%", objectFit: fit, display: "block" }}
			/>
		</div>
	);
};

export default FlexImage;
