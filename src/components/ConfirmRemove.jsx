import removeAlert from "../assets/icon-alert.8a9d9385.svg";
import PropType from "prop-types";
import { activity } from "../services/services";

const ConfirmRemove = ({ isActivity, data, setData, setShow }) => {
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

ConfirmRemove.propTypes = {
  isActivity: PropType.bool.isRequired,
  data: PropType.object.isRequired,
  setData: PropType.func,
  setShow: PropType.func,
};

export default ConfirmRemove;
