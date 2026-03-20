import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer
			style={{
				background: "#000814",
				borderTop: "1px solid rgba(255,255,255,0.07)",
				padding: "3rem 2rem 1.5rem",
				marginTop: "4rem",
			}}
		>
			<div
				className="container-narrow"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					flexWrap: "wrap",
					gap: "2rem",
					marginBottom: "2.5rem",
				}}
			>
				{/* Brand */}
				<div>
					<div
						style={{
							fontSize: "1.4rem",
							fontWeight: 800,
							marginBottom: "0.5rem",
						}}
					>
						COSMO<span style={{ color: "var(--color-accent)" }}>SHOP</span>
					</div>
					<p
						style={{
							color: "var(--color-text-muted)",
							fontSize: "0.875rem",
							maxWidth: "220px",
							margin: 0,
						}}
					>
						A modern e-commerce project built with Next.js 15.
					</p>
				</div>

				{/* Navigation */}
				<div>
					<h6
						style={{
							fontWeight: 700,
							marginBottom: "0.75rem",
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							fontSize: "0.75rem",
							color: "var(--color-text-muted)",
						}}
					>
						Pages
					</h6>
					<nav
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.4rem",
						}}
					>
						{[
							{ label: "Home", href: "/" },
							{ label: "Products", href: "/products" },
							{ label: "About", href: "/about" },
							{ label: "Contact", href: "/contact" },
						].map((link) => (
							<Link
								key={link.href}
								href={link.href}
								style={{
									color: "var(--color-text-muted)",
									textDecoration: "none",
									fontSize: "0.9rem",
									transition: "color 0.2s",
								}}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>

				{/* Tech */}
				<div>
					<h6
						style={{
							fontWeight: 700,
							marginBottom: "0.75rem",
							textTransform: "uppercase",
							letterSpacing: "0.06em",
							fontSize: "0.75rem",
							color: "var(--color-text-muted)",
						}}
					>
						Built With
					</h6>
					<div
						style={{
							color: "var(--color-text-muted)",
							fontSize: "0.875rem",
							lineHeight: 2,
						}}
					>
						<div>Next.js 15 + React 18</div>
						<div>NextAuth v5</div>
						<div>React Bootstrap 5</div>
						<div>Sass / SCSS</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div
				className="container-narrow"
				style={{
					borderTop: "1px solid rgba(255,255,255,0.06)",
					paddingTop: "1rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "0.5rem",
					fontSize: "0.8rem",
					color: "var(--color-text-muted)",
				}}
			>
				<span>&copy; {new Date().getFullYear()} CosmoShop. All rights reserved.</span>
				<span>Portfolio project &mdash; not a real store</span>
			</div>
		</footer>
	);
};

export default Footer;
