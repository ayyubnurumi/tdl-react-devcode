import { useState } from "react";

export const AddTodoItem = () => {
  const [show, setshow] = useState(false);
  const [item, setItem] = useState({
    title: "",
    priority: "",
    color: "",
  });
  const priorityList = [
    { name: "Very High", color: "#ED4C5C", value: "very-high" },
    { name: "High", color: "#F8A541", value: "high" },
    { name: "Medium", color: "#00A790", value: "medium" },
    { name: "Low", color: "#428BC1", value: "low" },
    { name: "Very Low", color: "#8942C1", value: "very-low" },
  ];
  const onSubmit = () => {
    console.log(item);
  };
  return (
    <div className="todo-form-container" onClick={(e) => e.stopPropagation()}>
      <div className="todo-form-header">
        <h3>tambah list item</h3>
        <button style={{ border: "none", background: "none" }}>x</button>
      </div>
      <hr />
      <form id="add-item" onSubmit={onSubmit}>
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
              overflow: "hidden"
            }}
          >
            <span
              className="priority-dot"
              style={{
                background: item.color,
                margin: "10px",
                flex: "0 0 9px",
              }}
            />
            <input
              style={{ flex: "0 1 100px", border: "none", width: "100px"}}
              name="itemPriority"
              id="itemPriority"
              readOnly
              value={item.priority ? item.priority : "pilih priority :"}
            />
            <button onClick={() => setshow(!show)} >{show? <>&#581;</> : <>&#86;</>}</button>
          </div>
          <div
            className="priority-dropdown"
            style={{
              display: show ? "block" : "none",
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
                    onChange={() =>
                      setItem({
                        ...item,
                        priority: data.value,
                        color: data.color,
                      })
                    }
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
      </form>
      <hr />
      <button
        type="submit"
        form="add-item"
        className="add-btn"
        style={{ margin: "15px 40px 19px auto", float: "right" }}
      />
    </div>
  );
};
