import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaShoppingCart,
  FaLinkedin,
  FaPinterest,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";

import logo from "./logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const handleInput = () => {
    setSearchInput(true);
  };
  const handleDropdown = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
  };
  return (
    <>
      <aside>
        <div>
          <button className="side-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="side-header">
          <img
            className="side-copnany-logo"
            alt="copnany-logo"
            src={logo}
          ></img>
        </div>

        <div>
          <ul className="side-social-icons">
            <span>
              <span className="input-icon" onClick={handleInput}>
                {!searchInput && (
                  <span className="icon">
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
            <span className="side-cart">
              <FaShoppingCart />
            </span>
          </ul>
        </div>
      </aside>
      <div
        className={`${
          showLinks
            ? "side-links-container side-show-container side-links-shadow"
            : "side-links-container"
        }`}
      >
        <ul className="side-links">
          <li>
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="link" href="/product">
              Products
            </a>
          </li>
          <li>
            <a className="link" href="" onClick={handleDropdown}>
              Services
              {dropdown ? <FaCaretUp /> : <FaCaretDown />}
            </a>
          </li>
          {dropdown && (
            <span className="items">
              <li>
                <a className="link" href="/Item1">
                  Item1
                </a>
              </li>
              <li>
                <a className="link" href="/Item2">
                  Item2
                </a>
              </li>
              <li>
                <a className="link" href="/Item3">
                  Item3
                </a>
              </li>
            </span>
          )}
          <li>
            <a className="link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="side-social-links">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
          <a href="https://www.pinterest.com/">
            <FaPinterest />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
