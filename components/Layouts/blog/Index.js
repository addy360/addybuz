import Blog from "./Blog";

const Blogs = ({ postItems }) => {
  const blogs = Array(postItems).fill(2);
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
              {blogs.map((_, i) => (
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
