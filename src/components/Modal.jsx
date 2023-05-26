import PropType from "prop-types";
import ConfirmRemove from "./ConfirmRemove";
// import { AddTodoItem } from "./AddTodoItem";

const Modal = ({ show, setShow, data, isActivity }) => {
  const modal = document.getElementById("modal");
  return (
    <div
      id="modal"
      onClick={(e) => {
        if (e.target === modal) setShow(!show);
      }}
      style={{
        display: show ? "flex" : "none",
      }}
    >
      {/* <AddTodoItem /> */}
      <ConfirmRemove data={data} isActivity={isActivity}/>
    </div>
  );
};

Modal.propTypes = {
  show: PropType.bool.isRequired,
  setShow: PropType.func.isRequired,
  data: PropType.object,
  isActivity: PropType.bool
};

export default Modal;
