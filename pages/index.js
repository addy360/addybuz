import Layout from "../components/Layouts";
import Banner from "../components/Layouts/Home/Banner";
import BestSales from "../components/Layouts/Home/BestSales";
import Brands from "../components/Layouts/Home/Brands";
import Categories from "../components/Layouts/Home/Categories";
import NewArivals from "../components/Layouts/Home/NewArivals";
import NewsLetter from "../components/Layouts/Home/NewsLetter";
import Offers from "../components/Layouts/Home/Offers";
import Reviews from "../components/Layouts/Home/Reviews";
import WeekProducts from "../components/Layouts/Home/WeekProducts";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Offers />
      <WeekProducts />
      <Categories />
      <NewArivals />
      <BestSales sec_title="Best Sellers" />
      <BestSales sec_title="Hot Trends" />
      <Reviews />
      <Brands />
      <NewsLetter />
    </Layout>
  );
};

export default Home;
