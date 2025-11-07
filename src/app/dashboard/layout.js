
import DashboardMenu from "@/components/dashboard-menu";
import React from "react";
import { Container } from "react-bootstrap";

export const metadata = {
	title: {
		absolute: "Dashboard",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<DashboardMenu />
				<Container className="flex-grow-1">{children}</Container>
			</body>
		</html>
	);
}
