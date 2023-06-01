import { useNavigate } from "react-router-dom";
import del from "../assets/icon-delete.1e080ddb.svg";
import { useContext } from "react";
import { ControlFlow } from "../App";

const ActivityCard = (data) => {
  const nav = useNavigate();
  const {setShow, setIsActivity, setIsRemove} = useContext(ControlFlow);
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
          onClick={() => {setShow(true); setIsRemove(true)}}
        />
      </div>
    </div>
  );
};

export default ActivityCard;
