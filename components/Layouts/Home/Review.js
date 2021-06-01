const Review = ({ reviewer }) => {
  return (
    <div className="owl-item">
      <div
        className="
            review
            d-flex
            flex-row
            align-items-start
            justify-content-start
            "
      >
        <div>
          <div className="review_image">
            <img src="/images/review_1.jpg" alt="" />
          </div>
        </div>
        <div className="review_content">
          <div className="review_name">{reviewer}</div>
          <div className="review_rating_container">
            <div className="rating_r rating_r_4 review_rating">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="review_time">2 day ago</div>
          </div>
          <div className="review_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              fermentum laoreet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
