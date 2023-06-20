import { useContext, useEffect, useState } from "react";
import del from "../assets/icon-delete.1e080ddb.svg";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import { ControlFlow, ToDoItem } from "../App";
import Modal from "./Modal";

export const TodoItem = () => {
  const { editItem, setEditItem, setIsRemove, setIsActivity } =
    useContext(ControlFlow);
  const { todoItem } = useContext(ToDoItem);
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    setItem({
      title: todoItem.title,
      is_active: todoItem.is_active ? true : false,
      priority: todoItem.priority,
    });
  }, [todoItem]);

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
      <Modal toggle={{ show, setShow }} />
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
          aria-disabled
          onClick={() => {
            setShow(!show);
            setEditItem(!editItem);
          }}
        />
      </div>
      <img
        src={del}
        alt="delete-btn"
        onClick={() => {
          setShow(true);
          setIsRemove(true);
          setIsActivity(false);
        }}
      />
    </div>
  );
};
