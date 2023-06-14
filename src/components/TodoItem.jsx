import { useContext, useState } from "react";
import del from "../assets/icon-delete.1e080ddb.svg";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import { toDoItem } from "../services/services";
import { ControlFlow, ToDoData, ToDoItem } from "../App";

export const TodoItem = () => {
  const { show, setShow, editItem, setEditItem } = useContext(ControlFlow);
  const { setTodo } = useContext(ToDoData);
  const { todoItem } = useContext(ToDoItem);
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

  const [item, setItem] = useState({
    title: todoItem.title,
    is_active: todoItem.is_active ? true : false,
    priority: todoItem.priority,
  });

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
          name={item.title}
          id={item.title}
          value={item.is_active}
          onChange={() => {
            setItem({ ...item, is_active: !item.is_active });
          }}
        />
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: priorityColor(item.priority),
          }}
        />
        <p
          style={{
            textDecoration: item.is_active ? "none" : "line-through",
          }}
        >
          {item.title}
        </p>
        <img
          src={edit}
          alt="edit-btn"
          onClick={() => {
            setShow(!show);
            setEditItem(!editItem);
          }}
        />
      </div>
      <img
        src={del}
        alt="delete-btn"
        onClick={() =>
          toDoItem.removeItem(todoItem.id, todoItem.activity_group_id, setTodo)
        }
      />
    </div>
  );
};
