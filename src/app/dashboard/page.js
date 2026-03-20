import Link from "next/link";
import { API_URL } from "@/helpers/config";
import { Col, Row } from "react-bootstrap";
import { FiBox, FiPlusCircle, FiShoppingBag, FiUser } from "react-icons/fi";

export const metadata = { title: "Overview" };

const Page = async () => {
	let productCount = 0;
	try {
		const res = await fetch(`${API_URL}/products?limit=1`, { next: { revalidate: 60 } });
		const data = await res.json();
		productCount = data.total ?? 0;
	} catch (_) {}

	const stats = [
		{
			icon: FiShoppingBag,
			label: "Total Products",
			value: productCount,
			color: "#ff7b00",
		},
		{
			icon: FiBox,
			label: "Categories",
			value: 3,
			color: "#4cc9f0",
		},
		{
			icon: FiUser,
			label: "Active Users",
			value: 1,
			color: "#a8dadc",
		},
	];

	return (
		<>
			<div className="mb-4">
				<h2 style={{ fontWeight: 800, marginBottom: "0.25rem" }}>Dashboard</h2>
				<p style={{ color: "var(--color-text-muted)" }}>
					Welcome back. Here&apos;s an overview of your store.
				</p>
			</div>

			{/* Stats */}
			<Row xs={1} sm={3} className="g-4 mb-5">
				{stats.map((s) => {
					const Icon = s.icon;
					return (
						<Col key={s.label}>
							<div
								style={{
									background: "var(--color-surface)",
									borderRadius: "var(--radius-lg)",
									padding: "1.5rem",
									border: "1px solid var(--color-border)",
									display: "flex",
									alignItems: "center",
									gap: "1rem",
								}}
							>
								<div
									style={{
										background: `${s.color}20`,
										color: s.color,
										borderRadius: "var(--radius)",
										padding: "0.75rem",
										flexShrink: 0,
									}}
								>
									<Icon size={24} />
								</div>
								<div>
									<div
										style={{
											fontSize: "2rem",
											fontWeight: 800,
											lineHeight: 1,
										}}
									>
										{s.value}
									</div>
									<div
										style={{
											fontSize: "0.85rem",
											color: "var(--color-text-muted)",
										}}
									>
										{s.label}
									</div>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>

			{/* Quick actions */}
			<h5 style={{ fontWeight: 700, marginBottom: "1rem" }}>Quick Actions</h5>
			<div className="d-flex flex-wrap gap-3">
				<Link href="/dashboard/products" className="btn btn-outline-light">
					<FiBox className="me-2" />
					Manage Products
				</Link>
				<Link href="/dashboard/products/new" className="btn btn-warning fw-semibold">
					<FiPlusCircle className="me-2" />
					Add New Product
				</Link>
			</div>
		</>
	);
};

export default Page;