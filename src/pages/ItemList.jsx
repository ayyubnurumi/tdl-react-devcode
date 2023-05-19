import { useState } from "react";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import emptyTodo from "../assets/todo-empty-state.png";
import { Modal } from "../components/Modal";
import { Sort } from "../components/Sort";

import { TodoItem } from "../components/TodoItem";

export const ItemList = () => {
  const [show, setShow] = useState(false);
  const addTodo = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="section-header">
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <span>&lt;</span>
          <h2>Activity</h2>
          <img src={edit} alt="edit" />
        </div>
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <Sort />
          <button onClick={addTodo} className="add-btn">
            + tambah
          </button>
        </div>
      </div>
      <Modal show={show} />
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
