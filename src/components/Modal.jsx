import ConfirmRemove from "./ConfirmRemove";
import { AddTodoItem } from "./AddTodoItem";
import { useContext } from "react";
import { ControlFlow } from "../App";

const Modal = () => {
  const {show, isRemove} = useContext(ControlFlow);
  return (
    <div
      id="modal-container"
      style={{
        display: show ? "flex" : "none",
      }}
    >
      {isRemove ? (
        <ConfirmRemove />
      ) : (
        <AddTodoItem />
      )}
    </div>
  );
};

export default Modal;
