const Blog = () => {
  return (
    <div className="blog_post">
      <div
        className="blog_image"
        style={{ backgroundImage: "url(/images/blog_4.jpg)" }}
      ></div>
      <div className="blog_text">
        Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et
        malesuada.
      </div>
      <div className="blog_button">
        <a href="blog_single">Continue Reading</a>
      </div>
    </div>
  );
};

export default Blog;
