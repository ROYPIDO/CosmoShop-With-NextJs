"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.scss";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "Products" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
	{ href: "/login", label: "Login" },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				COSMO<span>SHOP</span>
			</div>
			<nav>
				<ul>
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={pathname === link.href ? styles.active : ""}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
