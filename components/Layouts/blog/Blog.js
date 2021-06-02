import Link from "next/link";
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
        <Link href="/blog/blog_single">
          <a>Continue Reading</a>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
