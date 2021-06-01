import SearchForm from "./SearchForm";

const HeaderListing = () => {
  return (
    <div className="header_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-3 col-3 order-1">
            <div className="logo_container">
              <div className="logo">
                <a href="cart.html#">AddyBuz</a>
              </div>
            </div>
          </div>

          <div
            className="
                  col-lg-6 col-12
                  order-lg-2 order-3
                  text-lg-left text-right
                "
          >
            <div className="header_search">
              <div className="header_search_content">
                <div className="header_search_form_container">
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>

          <div
            className="
                  col-lg-4 col-9
                  order-lg-3 order-2
                  text-lg-left text-right
                "
          >
            <div
              className="
                    wishlist_cart
                    d-flex
                    flex-row
                    align-items-center
                    justify-content-end
                  "
            >
              <div
                className="
                      wishlist
                      d-flex
                      flex-row
                      align-items-center
                      justify-content-end
                    "
              >
                <div className="wishlist_icon">
                  <img src="/images/heart.png" alt="" />
                </div>
                <div className="wishlist_content">
                  <div className="wishlist_text">
                    <a href="cart.html#">Wishlist</a>
                  </div>
                  <div className="wishlist_count">0</div>
                </div>
              </div>

              <div className="cart">
                <div
                  className="
                        cart_container
                        d-flex
                        flex-row
                        align-items-center
                        justify-content-end
                      "
                >
                  <div className="cart_icon">
                    <img src="/images/cart.png" alt="" />
                    <div className="cart_count">
                      <span>0</span>
                    </div>
                  </div>
                  <div className="cart_content">
                    <div className="cart_text">
                      <a href="cart.html#">Cart</a>
                    </div>
                    <div className="cart_price">Tzsh</div>
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

export default HeaderListing;
