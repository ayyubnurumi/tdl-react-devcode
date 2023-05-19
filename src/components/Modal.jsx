// import React from 'react'

import { AddTodoItem } from "./AddTodoItem";

export const Modal = (props) => {
  return (
    <div
      onClick={()=>props.setShow(!props.show)}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0, left: 0,
        zIndex: 5,
        background: "rgba(0,0,0,0.1)",
        display: props.show?"flex":"none",
        placeItems: "center",
      }}
    >
        <AddTodoItem />
    </div>
  );
};
