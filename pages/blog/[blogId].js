import Head from "next/head";

import Layout from "../../components/Layouts";
import BlogItem from "../../components/Layouts/blog/BlogItem";
import Blogs from "../../components/Layouts/blog/Index";

const Blog = () => {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/blog_single_styles.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/blog_single_responsive.css"
        />
        <title>AddyBuz | Single blog</title>
      </Head>
      <BlogItem />
      <Blogs postItems={3} />
    </Layout>
  );
};

export default Blog;
