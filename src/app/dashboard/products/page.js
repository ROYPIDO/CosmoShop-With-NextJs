import DashboardProducts from "@/components/dashboard-products";
import { API_URL } from "@/helpers/config";

const Page = async () => {
	const res = await fetch(`${API_URL}/products?limit=30`, { cache: "no-store" });
	const { products = [] } = await res.json();

	return (
		<>
			<DashboardProducts products={products} />
		</>
	);
};

export default Page;
