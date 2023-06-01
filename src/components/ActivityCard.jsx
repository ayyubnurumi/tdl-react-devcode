// import React from 'react'
import { useNavigate } from "react-router-dom";
import del from "../assets/icon-delete.1e080ddb.svg";
import PropType from "prop-types";
// import { activity } from "../services/services";

const ActivityCard = ({ data, setShow, show, setIsRemove, setIsActivity }) => {
  const nav = useNavigate();
  const tanggal = new Date(data.created_at).toLocaleDateString("id-ID", {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div id="activity-card">
      <h3 onClick={()=>{nav(`item-list/${data.id}`), setIsActivity(false)}}>{data.title}</h3>
      <div>
        <p>{tanggal}</p>
        <img
          id="delete-activity-btn"
          src={del}
          alt="delete"
          onClick={() => {setShow(!show); setIsRemove(true)}}
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
  setIsRemove: PropType.func
};

export default ActivityCard;
