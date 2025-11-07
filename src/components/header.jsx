"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className="" }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={` ${className} ${active ? "btn" : ""}`}>
      {children}
    </Link>
  );
};

export default function Header(){
  return (
    <header className="header">
      <div className="container-narrow header-inner">
        <div className="brand">
          <span className="brand-mark" />
          <Link href="/" aria-label="CosmoShop Home">CosmoShop</Link>
        </div>
        <nav className="nav">
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <Link href="/login" className="cta">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}
