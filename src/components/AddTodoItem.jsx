import { useContext, useState } from "react";
import { ControlFlow } from "../App";

export const AddTodoItem = () => {
  const { setShow } = useContext(ControlFlow);
  const [showDD, setShowDD] = useState(false);
  const [color, setColor] = useState("");
  const [item, setItem] = useState({
    activity_group_id: 0,
    title: "",
    priority: "",
  });

  const priorityList = [
    { name: "Very High", color: "#ED4C5C", value: "very-high" },
    { name: "High", color: "#F8A541", value: "high" },
    { name: "Medium", color: "#00A790", value: "medium" },
    { name: "Low", color: "#428BC1", value: "low" },
    { name: "Very Low", color: "#8942C1", value: "very-low" },
  ];

  const onSubmit = () => {
    setShow(false);
    console.log(item);
  };

  return (
    <form className="todo-form-container" onClick={(e) => e.stopPropagation()}>
      <div className="todo-form-header">
        <h3>tambah list item</h3>
        <button style={{ border: "none", background: "none" }}>x</button>
      </div>
      <hr />
      <div id="add-item">
        <label htmlFor="itemTitle">Nama List Item</label>
        <input
          id="itemTitle"
          type="text"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <div className="priority-dropdown-container">
          <label htmlFor="itemPriority">Priority</label>
          <div
            className="itemPriority-container"
            style={{
              display: "flex",
              placeItems: "center",
              border: "1px solid black",
              overflow: "hidden",
            }}
          >
            <span
              className="priority-dot"
              style={{
                background: color,
                margin: "10px",
                flex: "0 0 9px",
              }}
            />
            <input
              style={{ flex: "0 1 100px", border: "none", width: "100px" }}
              name="itemPriority"
              id="itemPriority"
              readOnly
              value={item.priority ? item.priority : "pilih priority :"}
            />
            <span
              onClick={() => {
                setShowDD(!showDD);
              }}
            >
              {showDD ? <>&#581;</> : <>&#86;</>}
            </span>
          </div>
          <div
            className="priority-dropdown"
            style={{
              display: showDD ? "block" : "none",
            }}
          >
            {priorityList.map((data, i) => {
              return (
                <div key={i} className="priority-dropdown-item">
                  <input
                    type="radio"
                    name="itemPriority"
                    id={data.name}
                    value={data.value}
                    onChange={() => {
                      setItem({
                        ...item,
                        priority: data.value,
                      });
                      setColor(data.color);
                    }}
                  />
                  <label htmlFor={data.name}>
                    <span
                      className="priority-dot"
                      style={{
                        background: data.color,
                      }}
                    />{" "}
                    {data.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <button
        type="submit"
        form="add-item"
        className="add-btn"
        style={{ margin: "15px 40px 19px auto", float: "right" }}
        onClick={onSubmit}
      />
    </form>
  );
};
