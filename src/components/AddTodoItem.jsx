// import React from 'react'

export const AddTodoItem = () => {
  const priority = [
    { name: "Very High", color: "#ED4C5C", value: "very-high" },
    { name: "High", color: "#F8A541", value: "high" },
    { name: "Medium", color: "#00A790", value: "medium" },
    { name: "Low", color: "#428BC1", value: "low" },
    { name: "Very Low", color: "#8942C1", value: "very-low" },
  ];
  return (
    <div
      style={{
        width: "490px",
        background: "#fff",
        borderRadius: "11px",
      }}
    >
      <div
        style={{
          padding: "24px 40px 19px 28px",
          display: "flex",
          justifyContent: "space-between",
          placeItems: "center",
        }}
      >
        <h3>tambah list item</h3>
        <button style={{border: "none", background: "none"}}>x</button>
      </div>
      <hr />
      <form
        style={{
          padding: "38px 40px 23px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="itemTitle">Nama List Item</label>
        <input
          id="itemTitle"
          type="text"
          style={{
            width: "100%",
            height: "52px",
            borderRadius: "6px",
            background: "#FFFFFF",
            border: "1px solid #16ABF8",
          }}
        />
        <label htmlFor="itemPrioty">Priority</label>
        <select
          name="itemPrioty"
          id="itemPriority"
          style={{ height: "52px", width: "205px" }}
        >
          {priority.map((item, i) => {
            return (
              <option
                key={i}
                value={item.value}
                style={{ display: "flex", gap: "11px", placeItems: "center" }}
              >
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: item.color,
                  }}
                />{" "}
                {item.name}
              </option>
            );
          })}
        </select>
      </form>
      <hr />
      <input
        type="submit"
        className="add-btn"
        style={{ margin: "15px 40px 19px auto", float: "right" }}
      />
    </div>
  );
};
