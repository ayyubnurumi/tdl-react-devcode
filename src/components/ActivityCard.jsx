// import React from 'react'
import del from "../assets/icon-delete.1e080ddb.svg";
import PropType from "prop-types";
// import { activity } from "../services/services";

const ActivityCard = ({ data, setShow, show }) => {
  return (
    <div
      id="activity-card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "17px",
        height: "234px",
        borderRadius: "11px",
        backgroundColor: "#fff",
      }}
    >
      <h3>{data.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#888888" }}>{data.created_at}</p>
        <img
          id="delete-btn"
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
  isActivity: PropType.bool,
  setIsActivity: PropType.func,
};

export default ActivityCard;
