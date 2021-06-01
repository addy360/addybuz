const MainLinks = ({ cls }) => {
  const modifier = cls || "";
  return (
    <>
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
    </>
  );
};

export default MainLinks;
