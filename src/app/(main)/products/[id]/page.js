import PageHeader from "@/components/page-header";
import ProductDetails from "@/components/product-details";
import ProductsInSameCategory from "@/components/products-in-same-category";
import { API_URL } from "@/helpers/config";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
	const res = await fetch(`${API_URL}/products/${params.id}`);
	if (!res.ok) return { title: "Product Not Found" };
	const data = await res.json();
	return { title: data.title };
};

const Page = async ({ params }) => {
	const productId = params.id;
	if (!productId) notFound();

	const [productRes, productsRes] = await Promise.all([
		fetch(`${API_URL}/products/${productId}`),
		fetch(`${API_URL}/products?limit=12`),
	]);

	if (!productRes.ok) notFound();

	const product = await productRes.json();
	const { products = [] } = await productsRes.json();

	return (
		<>
			<PageHeader title={product.title} />
			<div className="container-narrow py-4">
				<ProductDetails product={product} />
				<hr style={{ borderColor: "var(--color-border)", margin: "3rem 0" }} />
				<ProductsInSameCategory products={products} />
			</div>
		</>
	);
};

export default Page;
