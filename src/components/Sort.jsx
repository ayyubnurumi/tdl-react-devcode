import sort from "../assets/icon-sort.197e6f4f.svg";
import atoz from "../assets/sort/Group.svg";
import ztoa from "../assets/sort/Group-1.svg";
import baru from "../assets/sort/Group-4.svg";
import lama from "../assets/sort/Group-2.svg";
import notdone from "../assets/sort/Group-3.svg";

import { useState } from "react";

export const Sort = () => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const sortList = [
    { icon: baru, text: "Terbaru" },
    { icon: lama, text: "Terlama" },
    { icon: atoz, text: "A-Z" },
    { icon: ztoa, text: "Z-A" },
    { icon: notdone, text: "Belum Selesai" },
  ];
  return (
    <div className="dropdown">
      <button
        className="sort-btn"
        onClick={showDropdown}
      >
        <img src={sort} alt="sort-btn" />
      </button>
      <div
        className="dropdown-content"
        style={{
          display: show ? "flex" : "none",
        }}
      >
        {sortList.map((item, i) => {
          return (
            <button
              key={i}
            >
              <img src={item.icon} alt={item.text} /> {item.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};