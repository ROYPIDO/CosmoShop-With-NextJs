import PageHeader from "@/components/page-header";
import ProductList from "@/components/product-list";
import { API_URL } from "@/helpers/config";

export const metadata = {
	title: "Products",
	description: "Browse our full catalogue of curated products.",
};

export const revalidate = 0;

const Page = async () => {
	const res = await fetch(`${API_URL}/products?limit=30`);
	const { products = [] } = await res.json();

	return (
		<>
			<PageHeader
				title="Products"
				subtitle={`${products.length} items available`}
			/>
			<div className="container-narrow py-4">
				<ProductList products={products} />
			</div>
		</>
	);
};

export default Page;
