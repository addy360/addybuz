import React from "react";

const MainLinks = ({ cls }) => {
  const modifier = cls || "";
  return (
    <React.Fragment>
      <li className={modifier}>
        <a href="index.html">
          Home<i className="fa fa-angle-down"></i>
        </a>
      </li>
      <li className={modifier}>
        <a href="blog.html">
          blog<i className="fa fa-angle-down"></i>
        </a>
      </li>
      <li className={modifier}>
        <a href="contact.html">
          contact<i className="fa fa-angle-down"></i>
        </a>
      </li>
    </React.Fragment>
  );
};

export default MainLinks;
