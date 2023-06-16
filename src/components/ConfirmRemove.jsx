import { ActivityData, ControlFlow } from "../App";
import removeAlert from "../assets/icon-alert.8a9d9385.svg";
import { activity } from "../services/services";
import { useContext } from "react";

const ConfirmRemove = (prop) => {
  const { isActivity, setRemoveSucces, setData } = useContext(ControlFlow);
  const data = useContext(ActivityData);
  const kinda = isActivity ? "activity" : "list item";
  return (
    <div id="remove-container" onClick={(e) => e.stopPropagation()}>
      <img src={removeAlert} alt="remove-alert" />
      <p>
        apakah anda yakin ingin menghapus {kinda}{" "}
        <b>&ldquo;{data.title}&rdquo;?</b>
      </p>
      <div>
        <button
          className="delete-cancel-btn"
          onClick={() => prop.toggle.setShow(false)}
        >
          batal
        </button>
        <button
          className="delete-confirm-btn"
          onClick={() => {
            activity.removeActivity(data.id, setData);
            setRemoveSucces(true);
          }}
        >
          hapus
        </button>
      </div>
    </div>
  );
};

export default ConfirmRemove;
