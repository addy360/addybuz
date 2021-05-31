import React from "react";
import MainLinks from "./MainLinks";

const Nav = () => {
  return (
    <nav className="main_nav">
      <div className="row">
        <div className="col">
          <div className="main_nav_content d-flex flex-row">
            <div className="cat_menu_container">
              <div
                className="
                        cat_menu_title
                        d-flex
                        flex-row
                        align-items-center
                        justify-content-start
                      "
              >
                <div className="cat_burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="cat_menu_text">categories</div>
              </div>
              <ul className="cat_menu">
                <li>
                  <a href="cart.html#">
                    Computers & Laptops
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </a>
                </li>
                <li>
                  <a href="cart.html#">
                    Cameras & Photos<i className="fas fa-chevron-right"></i>
                  </a>
                </li>
                <li className="hassubs">
                  <a href="cart.html#">
                    Hardware<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul>
                    <li className="hassubs">
                      <a href="cart.html#">
                        Menu Item<i className="fas fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="cart.html#">
                    Smartphones & Tablets
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a href="cart.html#">
                    TV & Audio<i className="fas fa-chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a href="cart.html#">
                    Gadgets<i className="fas fa-chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a href="cart.html#">
                    Car Electronics<i className="fas fa-chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a href="cart.html#">
                    Video Games & Consoles
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a href="cart.html#">
                    Accessories<i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="main_nav_menu ml-auto">
              <ul className="standard_dropdown main_nav_dropdown">
                <MainLinks />
              </ul>
            </div>

            <div className="menu_trigger_container ml-auto">
              <div
                className="
                        menu_trigger
                        d-flex
                        flex-row
                        align-items-center
                        justify-content-end
                      "
              >
                <div className="menu_burger">
                  <div className="menu_trigger_text">menu</div>
                  <div className="cat_burger menu_burger_inner">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
