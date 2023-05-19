// import React from 'react'
import { useNavigate } from "react-router-dom";
import del from "../assets/icon-delete.1e080ddb.svg";
import { activity } from "../services/services";

export const ActivityCard = (data) => {
  const nav = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "1 1 23%",
        padding: "17px",
        height: "234px",
        borderRadius: "11px",
        backgroundColor: "#fff",
      }}
    >
      <h3 onClick={() => nav(`item-list/${data.data.id}`)}>
        {data.data.title}
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#888888" }}>{data.data.created_at}</p>
        <img
          src={del}
          alt="delete"
          style={{ cursor: "pointer" }}
          onClick={() => activity.removeActivity(data.data.id)}
        />
      </div>
    </div>
  );
};
