import BestSellerItem from "./BestSellerItem";

const BestSales = ({ sec_title }) => {
  return (
    <div className="best_sellers">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tabbed_container">
              <div className="tabs clearfix tabs-right">
                <div className="new_arrivals_title">{sec_title}</div>
                <div className="tabs_line">
                  <span></span>
                </div>
              </div>
              <div className="bestsellers_panel panel active">
                <div className="bestsellers_slider slider">
                  {Array(10)
                    .fill(2)
                    .map((_, i) => (
                      <BestSellerItem key={i} img={i} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSales;
