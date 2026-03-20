import Link from "next/link";

const NotFound = () => {
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
			<div
				style={{
					fontSize: "6rem",
					fontWeight: 800,
					lineHeight: 1,
					color: "var(--color-accent)",
					marginBottom: "0.5rem",
				}}
			>
				404
			</div>
			<h2 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
				Page Not Found
			</h2>
			<p style={{ color: "var(--color-text-muted)", maxWidth: "400px", marginBottom: "2rem" }}>
				The page you&apos;re looking for doesn&apos;t exist or has been moved.
			</p>
			<Link
				href="/"
				className="btn btn-warning px-4"
				style={{ fontWeight: 600 }}
			>
				Back to Home
			</Link>
		</div>
	);
};

export default NotFound;