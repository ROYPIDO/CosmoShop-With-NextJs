
import DashboardMenu from "@/components/dashboard-menu";
import { Container } from "react-bootstrap";

export const metadata = {
	title: {
		default: "Dashboard",
		template: "%s | Dashboard",
	},
};

export default function DashboardLayout({ children }) {
	return (
		<>
			<DashboardMenu />
			<Container className="py-4">{children}</Container>
		</>
	);
}
