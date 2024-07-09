import PageHeader from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata = {
	title: "About Us",
	description: "Our company supports ...",
};


const Page = () => {
	return (
		<>
			<PageHeader title="About Us"/>
			
			<p>--------</p>
			<div style={{width: "750px", height: "250px", position: "relative"}}>
			<Image src="/images/iwatch.png" fill style={{objectFit: "cover"}} alt="Iwatch"/>
			</div>
			<p>--------</p>
			<p className="header">Hello header</p>


			{[...new Array(100)].map((_, index) => (
				<p key={index}>.</p>
			))}

			<Image src="/images/nature.jpg" width={200} height={200} alt="Nature"/>

			<Image src="https://images.unsplash.com/photo-1719095078843-b753786fbbb4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={200} height={200} alt="photo"/>

			<Link href="/dashboard/products">Dashboard</Link>
		</>
	);
};

export default Page;
