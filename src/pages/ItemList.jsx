import { useContext, useEffect, useState } from "react";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import emptyTodo from "../assets/todo-empty-state.png";
import Modal from "../components/Modal";
import { Sort } from "../components/Sort";

import { TodoItem } from "../components/TodoItem";
import { ControlFlow, ToDoData, ToDoItem } from "../App";
import { useParams } from "react-router-dom";
import { activity } from "../services/services";

export const ItemList = () => {
  const { show, setShow } = useContext(ControlFlow);
  const { setTodoItem, editItem, setEditItem } = useContext(ToDoItem);
  const [update, setUpdate] = useState(false);
  const { actId } = useParams();

  const [todo, setTodo] = useState({
    id: 0,
    title: "New Activity",
    created_at: "",
    todo_items: [],
  });

  useEffect(() => {
    activity.activityDetail(actId, setTodo);
  }, [actId, setTodo]);

  const addTodo = () => {
    setShow(!show);
  };

  const handleUpdate = () => {
    activity.updateActivity(actId, todo.title, setTodo);
    setUpdate(false);
  };

  return (
    <ToDoData.Provider value={{ todo, setTodo }}>
      <Modal />
      <div className="section-header">
        <div style={{ display: "flex", gap: "20px", placeItems: "center" }}>
          <span>&lt;</span>
          {update ? (
            <form action="">
              <input
                type="text"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
              <button type="submit" onClick={handleUpdate}>
                <img src={edit} alt="edit" />
              </button>
            </form>
          ) : (
            <>
              <h2>{todo.title}</h2>
              <img src={edit} alt="edit" onClick={() => setUpdate(true)} />
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
        {todo.todo_items.length > 0 ? (
          todo.todo_items.map((todoItem) => {
            return (
              <div key={todoItem.id}>
                <ToDoItem.Provider
                  value={{ todoItem, setTodoItem, editItem, setEditItem }}
                >
                  <TodoItem />
                </ToDoItem.Provider>
              </div>
            );
          })
        ) : (
          <img src={emptyTodo} alt="empty-state" />
        )}
      </div>
    </ToDoData.Provider>
  );
};
