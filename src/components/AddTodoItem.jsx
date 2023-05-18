// import React from 'react'

export const AddTodoItem = () => {
  return (
    <div
      style={{
        width: "403px",
        height: "830px",
        background: "#fff",
        borderRadius: "11px",
      }}
    >
      <div
        style={{
          padding: "11px",
          display: "flex",
          justifyContent: "space-between",
          placeItems: "center",
        }}
      >
        <h3>tambah list item</h3>
        <button>x</button>
      </div>
      <hr />
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
};
