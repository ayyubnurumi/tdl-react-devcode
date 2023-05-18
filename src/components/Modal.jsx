// import React from 'react'

import { AddTodoItem } from "./AddTodoItem";

export const Modal = show => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        zIndex: 5,
        background: "rgba(0,0,0,0.1)",
        display: show?"flex":"none",
        placeItems: "center",
      }}
    >
        <AddTodoItem />
    </div>
  );
};
