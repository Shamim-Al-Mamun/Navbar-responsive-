import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import "./Dropdown.css";
import DropItems from "./DropItems";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <div className="dropdown-menu">
        <a href="item1">item1</a>
        <a href="/item1">item2</a>
        <span
          className="item3"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <a href="/item3">
            <span className="item3-item">
              item3 <FaCaretRight />
            </span>
            <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {dropdown && <DropItems />}
            </span>
          </a>
        </span>
        <a href="/item4">item4</a>
      </div>
    </>
  );
}

export default Dropdown;
