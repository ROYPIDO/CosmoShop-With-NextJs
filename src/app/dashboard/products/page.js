import DashboardProducts from "@/components/dashboard-products";
import { API_URL } from "@/helpers/config";
import React from "react";

const Page = async () => {
	const res = await fetch(`${API_URL}/products`);
	const data = await res.json();

	return (
		<>
			<DashboardProducts products={data} />
		</>
	);
};

export default Page;
