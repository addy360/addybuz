import Hproduct from "./Hproduct";
import ProdutsOfWeek from "./ProdutsOfWeek";

const WeekProducts = () => {
  const products = Array(16).fill(2);
  return (
    <div className="deals_featured">
      <div className="container">
        <div className="row">
          <div
            className="
                col
                d-flex
                flex-lg-row flex-column
                align-items-center
                justify-content-start
              "
          >
            <ProdutsOfWeek />
            <div className="featured">
              <div className="tabbed_container">
                <h4 className="text-center">Top Rated</h4>

                <div className="product_panel panel active">
                  <div className="featured_slider slider">
                    {products.map((_, i) => (
                      <div className="featured_slider_item" key={i}>
                        <div className="border_active"></div>
                        <Hproduct product={i} />
                      </div>
                    ))}
                  </div>
                  <div className="featured_slider_dots_cover"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekProducts;
