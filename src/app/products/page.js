import PageHeader from "@/components/page-header";
import ProductList from "@/components/product-list";
import { API_URL } from "@/helpers/config";

export const revalidate = 0;

export default async function Page(){
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  return (
    <>
      <PageHeader title="Products" subtitle="Curated picks that are easy on the eyes."/>
      <ProductList products={data} />
    </>
  );
}
