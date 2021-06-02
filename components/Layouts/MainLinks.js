import Link from "next/link";

const MainLinks = ({ cls }) => {
  const modifier = cls || "";
  return (
    <>
      <li className={modifier}>
        <Link href="/">
          <a>
            home<i className="fa fa-angle-down"></i>
          </a>
        </Link>
      </li>
      <li className={modifier}>
        <Link href="/blog">
          <a>
            blog<i className="fa fa-angle-down"></i>
          </a>
        </Link>
      </li>
      <li className={modifier}>
        <Link href="/contact">
          <a>
            contact<i className="fa fa-angle-down"></i>
          </a>
        </Link>
      </li>
    </>
  );
};

export default MainLinks;
