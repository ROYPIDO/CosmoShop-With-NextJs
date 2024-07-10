import DashboardProductEdit from "@/components/dashboard-product-edit";
import { API_URL } from "@/helpers/config";
import React from "react";

const Page = async ({ params }) => {
	const res = await fetch(`${API_URL}/products/${params.id}`);
	const data = await res.json();

	return (
		<div>
			<DashboardProductEdit product={data} />
		</div>
	);
};

export default Page;
