import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaSearch, FaShoppingCart, FaCaretDown } from "react-icons/fa";

import "./Navbar.css";
import logo from "./logo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const handleInput = () => {
    setSearchInput(true);
  };

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <span>
            <img className="copnany-logo" alt="copnany-logo" src={logo}></img>
          </span>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <a href="/service">
                Services
                <span className="cartdown">
                  <FaCaretDown />
                </span>
              </a>
              {dropdown && (
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Dropdown />
                </span>
              )}
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="cart-icons">
            <span>
              <span className="input-icon" onClick={handleInput}>
                {!searchInput && (
                  <span className="search-icon">
                    <FaSearch />
                  </span>
                )}
                <input
                  className={
                    searchInput ? "searchbox searchboxextend" : "searchbox"
                  }
                  onClick={handleInput}
                ></input>
              </span>
            </span>
            <span className="cart">
              <FaShoppingCart />
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
