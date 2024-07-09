import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
	return (
		<div className="mt-5 d-flex align-items-center justify-content-center gap-4">
			<Spinner size="lg" variant="info" /> Loading...
		</div>
	);
};

export default Loading;
