import Head from "next/head";

import Layout from "../components/Layouts";
import Home from "../components/Layouts/blog/Home";

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>AddyBuz | Blog</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/blog_styles.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/blog_responsive.css"
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default Blog;
