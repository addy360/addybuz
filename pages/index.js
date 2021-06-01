import Layout from "../components/Layouts";
import Banner from "../components/Layouts/Home/Banner";
import Categories from "../components/Layouts/Home/Categories";
import NewArivals from "../components/Layouts/Home/NewArivals";
import Offers from "../components/Layouts/Home/Offers";
import WeekProducts from "../components/Layouts/Home/WeekProducts";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Offers />
      <WeekProducts />
      <Categories />
      <NewArivals />
    </Layout>
  );
};

export default Home;
