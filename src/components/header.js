"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menu from "@/helpers/data/main-menu.json";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";


const Header = () => {
	const pathname = usePathname();
	const { data: session } = useSession();

	const handleLogout = () => {
		const res = confirm("Are you sure to logout?");
		if (!res) return;

		signOut({ callbackUrl: "/" });
	};

	return (
		<Navbar
			expand="lg"
			className="bg-dark"
			data-bs-theme="dark"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand href="/" as={Link}>
					<Image src={logo} alt="Cosmo Shop" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{menu.map((item) => (
							<Nav.Link
								key={item.id}
								href={item.url}
								as={Link}
								prefetch={item.prefecth}
								className={
									pathname === item.url ? "active" : ""
								}
							>
								{item.title}
							</Nav.Link>
						))}
					</Nav>
					{session ? (
						<>
							<Link href="/dashboard">Dashboard</Link> |
							<a href="#" onClick={handleLogout}>
								Logout
							</a>
						</>
					) : (
						<Link href="/login">Login</Link>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
