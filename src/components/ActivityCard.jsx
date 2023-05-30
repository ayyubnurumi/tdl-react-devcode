// import React from 'react'
import del from "../assets/icon-delete.1e080ddb.svg";
import PropType from "prop-types";
// import { activity } from "../services/services";

const ActivityCard = ({ data, setShow, show }) => {
  const tanggal = new Date(data.created_at).toLocaleDateString("id-ID", {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div id="activity-card">
      <h3>{data.title}</h3>
      <div>
        <p>{tanggal}</p>
        <img
          id="delete-activity-btn"
          src={del}
          alt="delete"
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
