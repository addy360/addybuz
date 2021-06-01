import ProductOfWeek from "./ProductOfWeek";

const ProdutsOfWeek = () => {
  const product1 = {
    name: "BoomMusic",
    prevPrice: 300_000,
    currPrice: 240_000,
  };
  const product2 = {
    name: "BeatsByDre",
    prevPrice: 350_000,
    currPrice: 280_000,
  };
  const product3 = { name: "AKG", prevPrice: 250_000, currPrice: 200_000 };
  const products = [product1, product2, product3];

  return (
    <div className="deals">
      <div className="deals_title">Deals of the Week</div>
      <div className="deals_slider_container">
        <div className="owl-carousel owl-theme deals_slider">
          {products.map((product) => (
            <ProductOfWeek product={product} />
          ))}
        </div>
      </div>
      <div className="deals_slider_nav_container">
        <div className="deals_slider_prev deals_slider_nav">
          <i className="fas fa-chevron-left ml-auto"></i>
        </div>
        <div className="deals_slider_next deals_slider_nav">
          <i className="fas fa-chevron-right ml-auto"></i>
        </div>
      </div>
    </div>
  );
};

export default ProdutsOfWeek;
