import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="row blog__row">
          <div className="col">
            <div
              className="
                  blog_posts
                  d-flex
                  flex-row
                  align-items-start
                  justify-content-between
                "
            >
              {Array(10)
                .fill(2)
                .map((_, i) => (
                  <Blog key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
