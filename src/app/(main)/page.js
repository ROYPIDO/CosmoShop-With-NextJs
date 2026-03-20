import Slider from "@/components/slider";
import ProductList from "@/components/product-list";
import Link from "next/link";
import { API_URL } from "@/helpers/config";

const CATEGORIES = [
	{ label: "Smartphones", emoji: "📱", value: "smartphones" },
	{ label: "Laptops", emoji: "💻", value: "laptops" },
	{ label: "Beauty", emoji: "💄", value: "beauty" },
	{ label: "Furniture", emoji: "🛋️", value: "furniture" },
	{ label: "Groceries", emoji: "🛒", value: "groceries" },
	{ label: "Sports", emoji: "⚽", value: "sports-accessories" },
];

const HomePage = async () => {
	const res = await fetch(
		`${API_URL}/products?limit=8&select=id,title,price,discountPercentage,thumbnail,category`,
		{ next: { revalidate: 3600 } }
	);
	const { products = [] } = await res.json();

	return (
		<>
			{/* Hero Slider */}
			<Slider />

			{/* Category shortcuts */}
			<section style={{ padding: "2.5rem 0 0" }}>
				<div className="container-narrow">
					<div
						style={{
							display: "flex",
							gap: "0.75rem",
							flexWrap: "wrap",
						}}
					>
						{CATEGORIES.map((cat) => (
							<Link
								key={cat.value}
								href={`/products`}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.45rem",
									background: "var(--color-surface)",
									border: "1px solid var(--color-border)",
									borderRadius: "99px",
									padding: "0.45rem 1rem",
									fontSize: "0.875rem",
									fontWeight: 500,
									color: "var(--color-text)",
									textDecoration: "none",
									transition: "border-color var(--transition), background var(--transition)",
								}}
								onMouseEnterCapture={undefined}
							>
								<span>{cat.emoji}</span>
								{cat.label}
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section style={{ padding: "3rem 0 4rem" }}>
				<div className="container-narrow">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "baseline",
							marginBottom: "1.75rem",
						}}
					>
						<div>
							<h2 style={{ fontWeight: 800, margin: 0 }}>Featured Products</h2>
							<p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", fontSize: "0.9rem" }}>
								Handpicked for you
							</p>
						</div>
						<Link
							href="/products"
							style={{
								color: "var(--color-accent)",
								textDecoration: "none",
								fontWeight: 600,
								fontSize: "0.9rem",
								whiteSpace: "nowrap",
							}}
						>
							View all →
						</Link>
					</div>
					<ProductList products={products} />
				</div>
			</section>

			{/* CTA Banner */}
			<section
				style={{
					background: "linear-gradient(135deg, #001d3d 0%, #000814 100%)",
					borderTop: "1px solid var(--color-border)",
					borderBottom: "1px solid var(--color-border)",
					padding: "4rem 2rem",
					textAlign: "center",
				}}
			>
				<div style={{ maxWidth: "560px", margin: "0 auto" }}>
					<h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", marginBottom: "0.75rem" }}>
						Ready to explore the full catalogue?
					</h2>
					<p style={{ color: "var(--color-text-muted)", marginBottom: "1.75rem" }}>
						Hundreds of products across every category, with real-time updates.
					</p>
					<Link href="/products" className="btn btn-warning fw-semibold px-5" style={{ fontSize: "1rem" }}>
						Shop All Products
					</Link>
				</div>
			</section>
		</>
	);
};

export default HomePage;
