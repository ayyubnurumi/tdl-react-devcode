import PropType from "prop-types";
import ConfirmRemove from "./ConfirmRemove";
// import { AddTodoItem } from "./AddTodoItem";

const Modal = ({ show, setShow, data, isActivity }) => {
  // const modalContainer = document.getElementById("modal-container");
  return (
    <div
      id="modal-container"
      onClick={() => {
        setShow(!show)
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
