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
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 3,
        background: "rgba(0,0,0,0.3)",
        display: show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
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
