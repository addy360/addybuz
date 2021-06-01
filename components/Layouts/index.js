import Header from "./Header";
import NewsLetter from "../Layouts/Home/NewsLetter";
import Footer from "../Layouts/Home/Footer";

import Copyright from "../Layouts/Home/Copyright";

const Layout = ({ children }) => {
  return (
    <div className="super_container">
      <Header />
      {children}
      <NewsLetter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
