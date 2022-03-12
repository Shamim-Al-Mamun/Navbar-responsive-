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
        <a>item1</a>
        <a>item2</a>
        <span
          className="item3"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <a>
            <span className="item3-item">
              item3 <FaCaretRight />
            </span>
            <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {dropdown && <DropItems />}
            </span>
          </a>
        </span>
        <a>item4</a>
      </div>
    </>
  );
}

export default Dropdown;
