const Home = () => {
  return (
    <div className="home">
      <div
        className="home_background parallax-window"
        data-parallax="scroll"
        data-image-src="/images/shop_background.jpg"
      ></div>
      <div className="home_overlay"></div>
      <div
        className="
            home_content
            d-flex
            flex-column
            align-items-center
            justify-content-center
          "
      >
        <h2 className="home_title">
          Welcome to our educative and inspiring blog
        </h2>
      </div>
    </div>
  );
};

export default Home;
