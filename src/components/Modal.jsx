import PropType from "prop-types";
import { AddTodoItem } from "./AddTodoItem";

const Modal = ({show, setShow}) => {
  return (
    <div
      onClick={() => setShow(!show)}
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
      <AddTodoItem />
    </div>
  );
};

Modal.propTypes = {
  show: PropType.bool.isRequired,
  setShow: PropType.func.isRequired,
};

export default Modal;
