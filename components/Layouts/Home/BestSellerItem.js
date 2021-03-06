const BestSellerItem = () => {
  return (
    <div className="bestsellers_item">
      <div
        className="
            bestsellers_item_container
            d-flex
            flex-row
            align-items-center
            justify-content-start
            "
      >
        <div className="bestsellers_image">
          <img src="/images/best_3.png" alt="" />
        </div>
        <div className="bestsellers_content">
          <div className="bestsellers_category">
            <a href="index.html#">Headphones</a>
          </div>
          <div className="bestsellers_name">
            <a href="product.html">Nomi Black White</a>
          </div>
          <div className="rating_r rating_r_4 bestsellers_rating">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="bestsellers_price discount">
            Tzsh 299,999<span>399,999</span>
          </div>
        </div>
      </div>
      <div className="bestsellers_fav">
        <i className="fas fa-heart"></i>
      </div>
      <ul className="bestsellers_marks">
        <li className="bestsellers_mark bestsellers_discount">-25%</li>
        <li className="bestsellers_mark bestsellers_new">new</li>
      </ul>
    </div>
  );
};

export default BestSellerItem;
