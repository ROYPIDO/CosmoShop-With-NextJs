import PageHeader from "@/components/page-header";
import { Col, Row } from "react-bootstrap";

export const metadata = {
	title: "About",
	description: "Learn about CosmoShop — our mission, values, and team.",
};

const features = [
	{
		icon: "🚀",
		title: "Fast & Modern",
		description:
			"Built with Next.js 15 and React 18, delivering lightning-fast page loads and seamless navigation.",
	},
	{
		icon: "🔒",
		title: "Secure by Design",
		description:
			"Authentication powered by NextAuth v5 — supporting credentials, GitHub, and Google sign-in.",
	},
	{
		icon: "📦",
		title: "Full Product Management",
		description:
			"A complete dashboard to create, edit, and delete products with real-time cache revalidation.",
	},
];

const Page = () => {
	return (
		<>
			<PageHeader
				title="About CosmoShop"
				subtitle="A full-stack Next.js portfolio project"
			/>

			<div className="container-narrow py-4">
				{/* Mission */}
				<section className="mb-5">
					<h2 style={{ color: "var(--color-accent)", fontWeight: 700 }}>
						Our Mission
					</h2>
					<p
						style={{
							fontSize: "1.1rem",
							color: "var(--color-text-muted)",
							maxWidth: "640px",
						}}
					>
						CosmoShop is a showcase of modern web development practices — combining
						server-side rendering, secure authentication, and a clean dark UI into a
						production-ready storefront template.
					</p>
				</section>

				{/* Feature cards */}
				<section>
					<h2 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>
						What&apos;s Inside
					</h2>
					<Row xs={1} md={3} className="g-4">
						{features.map((f) => (
							<Col key={f.title}>
								<div
									style={{
										background: "var(--color-surface)",
										borderRadius: "var(--radius-lg)",
										padding: "2rem",
										border: "1px solid var(--color-border)",
										height: "100%",
									}}
								>
									<div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
										{f.icon}
									</div>
									<h4 style={{ fontWeight: 700 }}>{f.title}</h4>
									<p
										style={{
											color: "var(--color-text-muted)",
											marginBottom: 0,
										}}
									>
										{f.description}
									</p>
								</div>
							</Col>
						))}
					</Row>
				</section>

				{/* Tech stack */}
				<section className="mt-5 mb-4">
					<h2 style={{ fontWeight: 700, marginBottom: "1rem" }}>Tech Stack</h2>
					<div className="d-flex flex-wrap gap-2">
						{[
							"Next.js 15",
							"React 18",
							"NextAuth v5",
							"React Bootstrap",
							"Sass / SCSS",
							"Yup Validation",
							"Server Actions",
							"Swiper.js",
						].map((tech) => (
							<span
								key={tech}
								style={{
									background: "var(--color-surface-alt)",
									border: "1px solid var(--color-border)",
									borderRadius: "var(--radius-sm)",
									padding: "0.3rem 0.85rem",
									fontSize: "0.85rem",
									fontWeight: 600,
									color: "var(--color-accent-alt)",
								}}
							>
								{tech}
							</span>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default Page;
