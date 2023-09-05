import React from "react";
import "./header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <h3>
            <a href="/">GamesKart</a>
          </h3>
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
