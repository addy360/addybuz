import Review from "./Review";

const Reviews = () => {
  const reviewers = [
    "Jane Doe",
    "James Bond",
    "John Doe",
    "Jackson Edwin",
    "Jane Doe",
    "James Bond",
    "John Doe",
    "Jackson Edwin",
  ];
  return (
    <div className="reviews">
      <div className="container">
        <div className="row reviews__row">
          <div className="col">
            <div className="reviews_title_container">
              <h3 className="reviews_title">Latest Reviews</h3>
              <div className="reviews_all ml-auto">
                <a href="index.html#">
                  view all <span>reviews</span>
                </a>
              </div>
            </div>
            <div className="reviews_slider_container">
              <div className="owl-carousel owl-theme reviews_slider">
                {reviewers.map((reviewer, i) => (
                  <Review reviewer={reviewer} key={i} />
                ))}
              </div>
              <div className="reviews_dots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
