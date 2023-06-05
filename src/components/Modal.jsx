import ConfirmRemove from "./ConfirmRemove";
import { AddTodoItem } from "./AddTodoItem";
import { useContext } from "react";
import { ControlFlow } from "../App";
import { RemoveSucces } from "./RemoveSucces";

const Modal = () => {
  const { show, isRemove, removeSucces } = useContext(ControlFlow);
  return (
    <div
      id="modal-container"
      style={{
        display: show ? "flex" : "none",
      }}
    >
      {isRemove ? (
        removeSucces ? (
          <RemoveSucces />
        ) : (
          <ConfirmRemove />
        )
      ) : (
        <AddTodoItem />
      )}
    </div>
  );
};

export default Modal;
