// import React from 'react'
import edit from "../assets/icon-edit-p.4ebec345.svg";
import emptyTodo from "../assets/todo-empty-state.png";
import sort from "../assets/icon-sort.197e6f4f.svg";
import atoz from "../assets/sort/Group.svg";
import ztoa from "../assets/sort/Group-1.svg";
import baru from "../assets/sort/Group-4.svg";
import lama from "../assets/sort/Group-2.svg";
import notdone from "../assets/sort/Group-3.svg";

import { TodoItem } from "../components/TodoItem";

export const ItemList = () => {
  const sortList = [
    { icon: baru, text: "Terbaru" },
    { icon: lama, text: "Terlama" },
    { icon: atoz, text: "A-Z" },
    { icon: ztoa, text: "Z-A" },
    { icon: notdone, text: "Belum Selesai" },
  ];
  return (
    <>
      <div className="section-header">
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <span>&lt;</span>
          <h2>Activity</h2>
          <img src={edit} alt="edit" />
        </div>
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <div className="dropdown">
            <button
              className="sortbtn"
              style={{ width: "54px", height: "54px", borderRadius: "50px" }}
            >
              <img src={sort} alt="sort-btn" />
            </button>
            <div
              className="dropdown-content"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "235px",
                height: "260px",
              }}
            >
              {sortList.map((item, i) => {
                return (
                  <button
                    key={i}
                    style={{
                      flex: "1 1",
                      borderRadius: 0,
                      border: "1px solid #e5e5e5",
                      background: "#fff",
                    }}
                  >
                    <img src={item.icon} alt={item.text} /> {item.text}
                  </button>
                );
              })}
            </div>
          </div>
          <button className="add-btn">+ tambah</button>
        </div>
      </div>
      <div className="section-body" style={{ gap: ".4rem" }}>
        <TodoItem />
        <img
          style={{
            flex: "0 1",
            marginBottom: "30px",
            height: "413px",
            marginInline: "auto",
          }}
          src={emptyTodo}
          alt="empty-state"
        />
      </div>
    </>
  );
};
