import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="super_container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
