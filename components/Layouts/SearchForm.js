const SearchForm = () => {
  return (
    <form action="cart.html#" className="header_search_form clearfix">
      <input
        type="search"
        required="required"
        className="header_search_input"
        placeholder="Search products..."
      />
      <div className="custom_dropdown">
        <div className="custom_dropdown_list">
          <span className="custom_dropdown_placeholder clc">
            All Categories
          </span>
          <i className="fas fa-chevron-down"></i>
          <ul className="custom_list clc">
            <li>
              <a className="clc" href="cart.html#">
                All Categories
              </a>
            </li>
            <li>
              <a className="clc" href="cart.html#">
                Computers
              </a>
            </li>
            <li>
              <a className="clc" href="cart.html#">
                Laptops
              </a>
            </li>
            <li>
              <a className="clc" href="cart.html#">
                Cameras
              </a>
            </li>
            <li>
              <a className="clc" href="cart.html#">
                Hardware
              </a>
            </li>
            <li>
              <a className="clc" href="cart.html#">
                Smartphones
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        className="header_search_button trans_300"
        value="Submit"
      >
        <img src="/images/search.png" alt="" />
      </button>
    </form>
  );
};

export default SearchForm;
