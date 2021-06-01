import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="banner_background"
        style={{ backgroundImage: "url(/images/banner_background.jpg)" }}
      ></div>
      <div className="container fill_height">
        <div className="row fill_height">
          <div className="banner_product_image">
            <img src="/images/banner_product.png" alt="" />
          </div>
          <div className="col-lg-5 offset-lg-4 fill_height">
            <div className="banner_content">
              <h1 className="banner_text ">new product</h1>
              <div className="banner_price">
                <span>Tzsh 800,000</span>Tzsh 560,000
              </div>
              <div className="banner_product_name">Apple Iphone 6s</div>
              <div className="button banner_button">
                <a href="index.html#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
