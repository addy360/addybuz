import Hproduct from "./Hproduct";

const NewArivals = () => {
  return (
    <div className="new_arrivals">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tabbed_container">
              <div className="tabs clearfix tabs-right">
                <div className="new_arrivals_title">Hot New Arrivals</div>
              </div>
              <div className="row">
                <div className="col-12" style={{ zIndex: 1 }}>
                  <div className="product_panel panel active">
                    <div className="arrivals_slider slider">
                      {Array(16)
                        .fill(2)
                        .map((_, i) => (
                          <div className="arrivals_slider_item" key={i}>
                            <div className="border_active"></div>
                            <Hproduct product={i} />
                          </div>
                        ))}
                    </div>
                    <div className="arrivals_slider_dots_cover"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArivals;
