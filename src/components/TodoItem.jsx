// import React from 'react'
import del from "../assets/icon-delete.1e080ddb.svg";
import edit from "../assets/icon-edit-p.4ebec345.svg"

export const TodoItem = () => {
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
        <input type="checkbox" name="" id="" />
        <span style={{width: "9px", height: "9px", borderRadius: "50%", background: "#ED4C5C"}}/>
        <p>contoh kegiatan</p>
        <img src={edit} alt="edit-btn" />
      </div>
      <img src={del} alt="delete-btn" />
    </div>
  );
};
