import { useContext, useState } from "react";
import del from "../assets/icon-delete.1e080ddb.svg";
import edit from "../assets/icon-edit-p.4ebec345.svg";
import { toDoItem } from "../services/services";
import { ToDoData } from "../App";

export const TodoItem = (data) => {
  const { setData } = useContext(ToDoData);
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

  const [dataItem, setDataItem] = useState({
    title: data.data.title,
    is_active: data.data.is_active ? true : false,
    priority: data.data.priority,
  });

  console.log(dataItem);

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
          name={dataItem.title}
          id={dataItem.title}
          value={dataItem.is_active}
          onChange={() => {
            setDataItem({ ...dataItem, is_active: !dataItem.is_active });
          }}
        />
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: priorityColor(dataItem.priority),
          }}
        />
        <p
          style={{
            textDecoration: dataItem.is_active ? "none" : "line-through",
          }}
        >
          {dataItem.title}
        </p>
        <img src={edit} alt="edit-btn" />
      </div>
      <img
        src={del}
        alt="delete-btn"
        onClick={() =>
          toDoItem.removeItem(
            data.data.id,
            data.data.activity_group_id,
            setData
          )
        }
      />
    </div>
  );
};
