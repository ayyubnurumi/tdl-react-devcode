import { useContext, useEffect, useState } from "react";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import emptyTodo from "../assets/todo-empty-state.png";
import Modal from "../components/Modal";
import { Sort } from "../components/Sort";

import { TodoItem } from "../components/TodoItem";
import { ControlFlow, ToDoData } from "../App";
import { useParams } from "react-router-dom";
import { activity } from "../services/services";

export const ItemList = () => {
  const { show, setShow } = useContext(ControlFlow);
  const [update, setUpdate] = useState(false);
  const { actId } = useParams();

  const [data, setData] = useState({
    id: actId,
    title: "New Activity",
    created_at: "",
    todo_items: [],
  });

  useEffect(() => {
    activity.activityDetail(actId, setData);
  }, [actId, setData]);

  const addTodo = () => {
    setShow(!show);
  };

  const handleUpdate = () => {
      activity.updateActivity(actId, data.title, setData);
      setUpdate(false);
  };

  return (
    <ToDoData.Provider value={{data, setData}}>
      <Modal />
      <div className="section-header">
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <span>&lt;</span>
          {update ? (
            <form action="">
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <button type="submit" onClick={handleUpdate} ><img src={edit} alt="edit" /></button>
            </form>
          ) : (
            <>
              <h2>{data.title}</h2>
              <img src={edit} alt="edit" onClick={()=> setUpdate(true)} />
            </>
          )}
        </div>
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <Sort />
          <button onClick={addTodo} className="add-btn">
            + tambah
          </button>
        </div>
      </div>
      <div className="section-body" style={{ gap: ".4rem" }}>
        {data.todo_items.length > 0 ? (
          data.todo_items.map((data)=>{
            return <TodoItem key={data.id} data={data}/>
          })
        ) : (
          <img src={emptyTodo} alt="empty-state" />
        )}
      </div>
    </ToDoData.Provider>
  );
};
