'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "70vh",
				textAlign: "center",
				padding: "2rem",
			}}
		>
			<div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
			<h2 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Something went wrong</h2>
			<p style={{ color: "var(--color-text-muted)", maxWidth: "400px", marginBottom: "2rem" }}>
				An unexpected error occurred. You can try again or return home.
			</p>
			<div className="d-flex gap-3">
				<button
					className="btn btn-warning px-4"
					style={{ fontWeight: 600 }}
					onClick={reset}
				>
					Try Again
				</button>
				<Link href="/" className="btn btn-outline-light px-4" style={{ fontWeight: 600 }}>
					Back to Home
				</Link>
			</div>
		</div>
	);
}