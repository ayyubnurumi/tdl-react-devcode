// import React from 'react'
import del from "../assets/icon-delete.1e080ddb.svg";
import edit from "../assets/icon-edit-p.4ebec345.svg"

export const TodoItem = (data) => {
  const priorityColor = (name)=>{
    const color = { "very-high": "#ED4C5C",
    "high": "#F8A541" ,
    "normal": "#00A790",
    "low": "#428BC1",
    "very-low": "#8942C1"}
    return color[name]
  }
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
      <div style={{display: "flex", gap: "11px", placeItems: "center"}}>
        <input type="checkbox" name="" id="" checked={data.data.is_active ? false: true}/>
        <span style={{width: "9px", height: "9px", borderRadius: "50%", background: priorityColor(data.data.priority) }}/>
        <p style={{textDecoration: data.data.is_active? "none" : "line-through"}}>{data.data.title}</p>
        <img src={edit} alt="edit-btn" />
      </div>
      <img src={del} alt="delete-btn" />
    </div>
  );
};
