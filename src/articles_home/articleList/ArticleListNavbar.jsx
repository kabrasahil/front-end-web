import React from "react";
import "./article-navbar.css"; // import your CSS file

function ArticleListNavbar() {
  return (
    <nav className="Navbar" style={{ minWidth: "100%" }}>
      <ul className="ml-5">
        <li>
          <a href="#">For You</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Reading List</a>
        </li>
      </ul>
    </nav>
  );
}

export default ArticleListNavbar;
