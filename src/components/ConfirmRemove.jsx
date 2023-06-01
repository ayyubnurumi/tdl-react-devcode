import removeAlert from "../assets/icon-alert.8a9d9385.svg";
import { activity } from "../services/services";
import { useContext } from "react";

const ConfirmRemove = () => {
  const {data, setData, isActivity, setShow} = useContext({data, setData, isActivity, setShow});
  const kinda = isActivity ? "activity" : "list item";
  return (
    <div id="remove-container">
      <img src={removeAlert} alt="remove-alert" />
      <p>
        apakah anda yakin ingin menghapus {kinda}{" "}
        <b>&ldquo;{data.title}&rdquo;?</b>
      </p>
      <div>
        <button className="delete-cancel-btn" onClick={() => setShow(false)}>
          batal
        </button>
        <button
          className="delete-confirm-btn"
          onClick={() => {activity.removeActivity(data.id, setData); setShow(false)}}
        >
          hapus
        </button>
      </div>
    </div>
  );
};

export default ConfirmRemove;
