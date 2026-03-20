const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "60vh",
				gap: "0.75rem",
				color: "var(--color-text-muted)",
			}}
		>
			<div
				style={{
					width: 28,
					height: 28,
					borderRadius: "50%",
					border: "3px solid rgba(255,123,0,0.25)",
					borderTopColor: "var(--color-accent)",
					animation: "spin 0.7s linear infinite",
				}}
			/>
			<style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
			Loading...
		</div>
	);
};

export default Loading;
