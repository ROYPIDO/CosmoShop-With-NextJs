import ProductCard from "./product-card";

export default function ProductList({ products = [] }){
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="product-grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
