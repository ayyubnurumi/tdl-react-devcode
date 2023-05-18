// import React from 'react'

import { AddTodoItem } from "./AddTodoItem";

export const Modal = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        zIndex: 3,
        background: "rgba(0,0,0,0.1)",
        display: "flex",
        placeItems: "center",
      }}
    >
        <AddTodoItem />
    </div>
  );
};
