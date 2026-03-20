import { auth } from "@/auth";
import { FiCalendar, FiMail, FiUser } from "react-icons/fi";

export const metadata = { title: "Profile" };

const Page = async () => {
	const session = await auth();
	const user = session?.user;

	return (
		<>
			<div className="mb-4">
				<h2 style={{ fontWeight: 800, marginBottom: "0.25rem" }}>Profile</h2>
				<p style={{ color: "var(--color-text-muted)" }}>Your account details</p>
			</div>

			<div
				style={{
					background: "var(--color-surface)",
					borderRadius: "var(--radius-lg)",
					border: "1px solid var(--color-border)",
					maxWidth: "500px",
					overflowX: "hidden",
				}}
			>
				{/* Avatar banner */}
				<div
					style={{
						background: "linear-gradient(135deg, #000814, #001d3d)",
						padding: "2rem",
						display: "flex",
						alignItems: "center",
						gap: "1.25rem",
					}}
				>
					{user?.image ? (
						<img
							src={user.image}
							alt={user.name}
							referrerPolicy="no-referrer"
							style={{
								width: 64,
								height: 64,
								borderRadius: "50%",
								objectFit: "cover",
								border: "2px solid var(--color-accent)",
							}}
						/>
					) : (
						<div
							style={{
								width: 64,
								height: 64,
								borderRadius: "50%",
								background: "var(--color-accent)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0,
							}}
						>
							<FiUser size={28} color="#fff" />
						</div>
					)}
					<div>
						<h4 style={{ margin: 0, fontWeight: 700 }}>
							{user?.name ?? "Anonymous"}
						</h4>
						<span
							style={{
								fontSize: "0.8rem",
								background: "var(--color-accent)",
								color: "#000",
								borderRadius: "99px",
								padding: "0.15rem 0.65rem",
								fontWeight: 600,
							}}
						>
							Admin
						</span>
					</div>
				</div>

				{/* Details */}
				<div style={{ padding: "1.5rem" }}>
					{[
						{ icon: FiUser, label: "Name", value: user?.name ?? "—" },
						{ icon: FiMail, label: "Email", value: user?.email ?? "—" },
						{
							icon: FiCalendar,
							label: "Role",
							value: "Administrator",
						},
					].map(({ icon: Icon, label, value }) => (
						<div
							key={label}
							className="d-flex align-items-center gap-3 py-3"
							style={{ borderBottom: "1px solid var(--color-border)" }}
						>
							<Icon size={18} color="var(--color-accent)" />
							<span
								style={{
									minWidth: "80px",
									color: "var(--color-text-muted)",
									fontSize: "0.875rem",
								}}
							>
								{label}
							</span>
							<span style={{ fontWeight: 500 }}>{value}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Page;