import Link from "next/link";

export default function Slider({ className="" }){
  return (
    <section className={`hero ${className}`}>
      <div className="container-narrow">
        <span className="badge">🪐 Minimal dark</span>
        <h1 className="title">CosmoShop</h1>
        <p className="subtitle">
          A tiny, elegant storefront. Clean dark UI, readable typography,
          and product cards that don't shout—just shine.
        </p>
        <div className="actions">
          <Link href="/products" className="btn btn-primary">Explore products</Link>
          <a href="https://github.com/ROYPIDO/CosmoShop-With-NextJs" className="btn" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
