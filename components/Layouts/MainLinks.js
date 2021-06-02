import Link from "next/link";

const MainLinks = ({ cls }) => {
  const modifier = cls || "";
  return (
    <>
      <li className={modifier}>
        <a href="/">home</a>
      </li>
      <li className={modifier}>
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </li>
      <li className={modifier}>
        <Link href="/contact">
          <a>contact us</a>
        </Link>
      </li>
    </>
  );
};

export default MainLinks;
