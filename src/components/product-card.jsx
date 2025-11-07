export default function ProductCard({ product }){
  const price = product.price ?? 0;
  const discounted = product.discounted ?? 0;
  const hasDiscount = discounted > 0 && discounted < price;
  const newPrice = hasDiscount ? (price - discounted) : price;

  return (
    <article className="card product-card">
      <img
        className="product-thumb"
        src={product.images?.[0] || "https://picsum.photos/seed/cosmo/600/400"}
        alt={product.title}
        loading="lazy"
      />
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <div className="price-row">
          {hasDiscount ? (
            <>
              <span className="price old">${price}</span>
              <span className="price new">${newPrice}</span>
            </>
          ) : (
            <span className="price">${price}</span>
          )}
        </div>
        <div className="card-actions">
          <button className="btn">Details</button>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </article>
  );
}
