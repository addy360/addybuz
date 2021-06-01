import Layout from "../components/Layouts";
import Banner from "../components/Layouts/Home/Banner";
import Offers from "../components/Layouts/Home/Offers";
import WeekProducts from "../components/Layouts/Home/WeekProducts";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Offers />
      <WeekProducts />
    </Layout>
  );
};

export default Home;
