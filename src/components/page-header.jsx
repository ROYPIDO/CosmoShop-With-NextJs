export default function PageHeader({ title, subtitle }){
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="title" style={{fontSize:"clamp(22px,3vw,32px)"}}>{title}</h2>
        {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}
