import Document, { Head, Main, NextScript, Html } from "next/document";
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/bootstrap4/bootstrap.min.css"
          />
          <link
            href="/static/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/plugins/OwlCarousel2-2.2.1/owl.carousel.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/plugins/OwlCarousel2-2.2.1/animate.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/plugins/slick-1.8.0/slick.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/main_styles.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/styles/responsive.css"
          />
        </Head>

        <body>
          <Main />

          <NextScript />

          <script src="/static/js/jquery-3.3.1.min.js"></script>
          <script src="/static/styles/bootstrap4/popper.js"></script>
          <script src="/static/styles/bootstrap4/bootstrap.min.js"></script>
          <script src="/static/plugins/greensock/TweenMax.min.js"></script>
          <script src="/static/plugins/greensock/TimelineMax.min.js"></script>
          <script src="/static/plugins/scrollmagic/ScrollMagic.min.js"></script>
          <script src="/static/plugins/greensock/animation.gsap.min.js"></script>
          <script src="/static/plugins/greensock/ScrollToPlugin.min.js"></script>
          <script src="/static/plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
          <script src="/static/plugins/slick-1.8.0/slick.js"></script>
          <script src="/static/plugins/easing/easing.js"></script>

          <script src="/static/js/custom.js"></script>
          <script src="/static/js/blog_custom.js"></script>
          <script src="/static/js/contact_custom.js"></script>
          <script src="/static/js/blog_single_custom.js"></script>
        </body>
      </Html>
    );
  }
}
