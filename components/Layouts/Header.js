import { useState } from "react";
import Currencies from "./Currencies";
import HeaderListing from "./HeaderListing";
import Nav from "./Nav";
import PageMenu from "./PageMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top_bar">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row">
              <div className="top_bar_contact_item">
                <i className="fas fa-phone-square fa-2x"></i>
                <p>+255 988 111 111</p>
              </div>
              <div className="top_bar_contact_item">
                <i className="fas fa-inbox fa-2x"></i>
                <p> jane@email.com</p>
              </div>
              <div className="top_bar_content ml-auto">
                <div className="top_bar_menu">
                  <ul className="standard_dropdown top_bar_dropdown">
                    <li>
                      <a href="cart.html#">
                        Tzshs<i className="fas fa-chevron-down"></i>
                      </a>
                      <ul>
                        <Currencies />
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="top_bar_user">
                  <div className="user_icon">
                    <img src="/images/user.svg" alt="" />
                  </div>
                  <div>
                    <a href="cart.html#">Register</a>
                  </div>
                  <div>
                    <a href="cart.html#">Sign in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderListing />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <PageMenu menuOpen={menuOpen} />
    </header>
  );
};

export default Header;
