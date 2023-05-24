// import React from 'react'
import { useNavigate } from "react-router-dom";
import del from "../assets/icon-delete.1e080ddb.svg";
import PropType from "prop-types";
// import { activity } from "../services/services";

const ActivityCard = ({ data, setShow, show }) => {
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
      <h3 onClick={() => nav(`item-list/${data.id}`)}>
        {data.title}
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#888888" }}>{data.created_at}</p>
        <img
          src={del}
          alt="delete"
          style={{ cursor: "pointer" }}
          onClick={() => setShow(!show)}
        />
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  data: PropType.object.isRequired,
  show: PropType.bool.isRequired,
  setShow: PropType.func.isRequired,
};

export default ActivityCard;
