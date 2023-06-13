import { useContext, useState } from "react";
import del from "../assets/icon-delete.1e080ddb.svg";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import { toDoItem } from "../services/services";
import { ToDoData } from "../App";

export const TodoItem = (prop) => {
  const { setTodo } = useContext(ToDoData);
  const priorityColor = (name) => {
    const color = {
      "very-high": "#ED4C5C",
      high: "#F8A541",
      normal: "#00A790",
      low: "#428BC1",
      "very-low": "#8942C1",
    };
    return color[name];
  };

  const [todoItem, setTodoItem] = useState({
    title: prop.data.title,
    is_active: prop.data.is_active ? true : false,
    priority: prop.data.priority,
  });

  console.log(prop.data);
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "11px",
        height: "80px",
        width: "100%",
        padding: "28px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "11px", placeItems: "center" }}>
        <input
          type="checkbox"
          name={todoItem.title}
          id={todoItem.title}
          value={todoItem.is_active}
          onChange={() => {
            setTodoItem({ ...todoItem, is_active: !todoItem.is_active });
          }}
        />
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: priorityColor(todoItem.priority),
          }}
        />
        <p
          style={{
            textDecoration: todoItem.is_active ? "none" : "line-through",
          }}
        >
          {todoItem.title}
        </p>
        <img src={edit} alt="edit-btn" />
      </div>
      <img
        src={del}
        alt="delete-btn"
        onClick={() =>
          toDoItem.removeItem(
            prop.data.id,
            prop.data.activity_group_id,
            setTodo
          )
        }
      />
    </div>
  );
};
