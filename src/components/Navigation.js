import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="logo">
          MovieApp
        </Link>
        {/* 오른쪽 메뉴 제거됨 */}
      </div>
    </header>
  );
}

export default Navigation;
