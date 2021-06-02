import Currencies from "./Currencies";
import MainLinks from "./MainLinks";

const PageMenu = ({ menuOpen }) => {
  return (
    <div className="page_menu">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="page_menu_content"
              style={{ height: menuOpen && "auto" }}
            >
              <div className="page_menu_search">
                <form action="cart.html#">
                  <input
                    type="search"
                    required="required"
                    className="page_menu_search_input"
                    placeholder="Search for products..."
                  />
                </form>
              </div>
              <ul className="page_menu_nav">
                <li className="page_menu_item has-children">
                  <a href="cart.html#">
                    Currency<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="page_menu_selection">
                    <Currencies />
                  </ul>
                </li>
                <MainLinks cls={"page_menu_item"} />
              </ul>
              <div className="menu_contact">
                <div className="menu_contact_item">
                  <i className="fas fa-phone-square fa-2x"></i>
                  <p>+255 988 111 111</p>
                </div>
                <div className="menu_contact_item">
                  <i className="fas fa-inbox fa-2x"></i>
                  <p> jane@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMenu;
