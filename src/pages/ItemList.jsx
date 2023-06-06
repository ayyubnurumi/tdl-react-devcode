import { useContext, useState } from "react";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import emptyTodo from "../assets/todo-empty-state.png";
import Modal from "../components/Modal";
import { Sort } from "../components/Sort";

import { TodoItem } from "../components/TodoItem";
import { ActivityData, ControlFlow } from "../App";
// import { activity, toDoItem } from "../services/services";

export const ItemList = () => {
  const { show, setShow } = useContext(ControlFlow);
  const data = useContext(ActivityData);
  console.log(data);
  const [update, setUpdate] = useState(false);
  const addTodo = () => {
    setShow(!show);
  };
  return (
    <>
      <Modal />
      <div className="section-header">
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <span>&lt;</span>
          {update?
            <h2>Activity</h2>:
            <input type="text" value="h" />
          }
          <img src={edit} alt="edit" onClick={() => setUpdate(!update)} />
        </div>
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <Sort />
          <button onClick={addTodo} className="add-btn">
            + tambah
          </button>
        </div>
      </div>
      <div className="section-body" style={{ gap: ".4rem" }}>
        {data ? <TodoItem /> : <img src={emptyTodo} alt="empty-state" />}
      </div>
    </>
  );
};
