import { useContext, useEffect, useState } from "react";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import emptyTodo from "../assets/todo-empty-state.png";
import Modal from "../components/Modal";
import { Sort } from "../components/Sort";

import { TodoItem } from "../components/TodoItem";
import { ControlFlow } from "../App";
import { useParams } from "react-router-dom";
import { activity } from "../services/services";

export const ItemList = () => {
  const { show, setShow } = useContext(ControlFlow);
  const [update, setUpdate] = useState(false);
  const [actTitle, setActTitle] = useState("");
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    activity.activityDetail(id, setData);
  }, [id, setData]);
  const addTodo = () => {
    setShow(!show);
  };
  const handleUpdate = () => {
    update
      ? (activity.updateActivity(id, actTitle, setData), setUpdate(false))
      : setUpdate(true);
  };
  console.log(data);
  return (
    <>
      <Modal />
      <div className="section-header">
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <span>&lt;</span>
          {update ? (
            <h2>{data.title}</h2>
          ) : (
            <input
              type="text"
              value={""}
              onChange={(e) => setActTitle(e.target.value)}
            />
          )}
          <img src={edit} alt="edit" onClick={handleUpdate} />
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
