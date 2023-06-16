import { useNavigate } from "react-router-dom";
import del from "../assets/icon-delete.1e080ddb.svg";
import { useContext, useState } from "react";
import { ActivityData, ControlFlow } from "../App";
import Modal from "./Modal";

const ActivityCard = () => {
  const nav = useNavigate();
  const data = useContext(ActivityData);
  const { setIsActivity, setIsRemove } = useContext(ControlFlow);
  const [show, setShow] = useState(false);

  const tanggal = new Date(data.created_at).toLocaleDateString("id-ID", {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div
      id="activity-card"
      onClick={() => {
        nav(`item-list/${data.id}`), setIsActivity(false);
      }}
    >
      <h3>{data.title}</h3>
      <div>
        <p>{tanggal}</p>
        <img
          id="delete-activity-btn"
          src={del}
          alt="delete"
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
            setIsRemove(true);
          }}
        />
      </div>
      <Modal toggle={{show, setShow}} />
    </div>
  );
};

export default ActivityCard;
