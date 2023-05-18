// import React from 'react'
import { useNavigate } from "react-router-dom";
import del from "../assets/icon-delete.1e080ddb.svg";

export const ActivityCard = () => {
    const nav = useNavigate()
  return (
    <div
    onClick={()=> nav("item-list")}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "1 1 23%",
        padding: "17px",
        height: "234px",
        borderRadius: "11px",
        backgroundColor: "#fff"
      }}
    >
      <h3>New Activity</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{color: "#888888"}}>18 May 20233</p>
        <img src={del} alt="delete" />
      </div>
    </div>
  );
};
