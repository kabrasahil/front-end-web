import React from "react";
import "./article-navbar.css"; // import your CSS file

function ArticleListNavbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="#">For You</a>
        </li>
        <li>
          <a href="#">Following</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Tech</a>
        </li>
        <li>
          <a href="#">Culture</a>
        </li>
        <li>
          <a href="#">Politics</a>
        </li>
        <li>
          <a href="#">Science</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
      </ul>
    </nav>
  );
}

export default ArticleListNavbar;
