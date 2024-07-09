"use client";
import React from "react";
import menuItems from "@/helpers/data/dashboard-menu.json";
import Link from "next/link";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { usePathname } from "next/navigation";

const DashboardMenu = () => {
	const pathname = usePathname();

	return (
		<Navbar expand="lg" className="bg-info mb-3" >
			<Container>
				<Navbar.Brand href="#">Product Manager</Navbar.Brand>
				<Navbar.Toggle aria-controls="ocDashboard" />
				<Navbar.Offcanvas
					id="ocDashboard"
					aria-labelledby="ocDashboardLbl"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="ocDashboardLbl">
							Product Manager
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((item) => (
								<Nav.Link
									href={item.url}
									key={item.id}
									prefetch={item.prefetch}
									as={Link}
									className={
										pathname === item.url ? "active" : ""
									}
								>
									{item.title}
								</Nav.Link>
							))}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default DashboardMenu;
