const Hproduct = ({ product }) => {
  let img = product % 8 == 0 ? 8 : product % 8;
  return (
    <div
      className="
        product_item
        discount
        d-flex
        flex-column
        align-items-center
        justify-content-center
        text-center
        "
    >
      <div
        className="
            product_image
            d-flex
            flex-column
            align-items-center
            justify-content-center
        "
      >
        <img src={`/images/featured_${img}.png`} alt="" />
      </div>
      <div className="product_content">
        {/* discount class */}
        <div className="product_price">Tzsh 225,000</div>
        <div className="product_name">
          <div>
            <a href="product.html">MacBook Pro...</a>
          </div>
        </div>
        <div className="product_extras">
          <div className="product_color">
            <input
              type="radio"
              checked
              name="product_color"
              style={{ background: "#b19c83" }}
            />
            <input
              type="radio"
              name="product_color"
              style={{ background: "#000000" }}
            />
            <input
              type="radio"
              name="product_color"
              style={{ background: "#999999" }}
            />
          </div>
          <button className="product_cart_button">Add to Cart</button>
        </div>
      </div>
      <div className="product_fav">
        <i className="fas fa-heart"></i>
      </div>
      <ul className="product_marks">
        {/* <li className="product_mark product_discount">-25%</li> */}
        <li className="product_mark product_new">new</li>
      </ul>
    </div>
  );
};

export default Hproduct;
