import ConfirmRemove from "./ConfirmRemove";
import { AddTodoItem } from "./AddTodoItem";
import { useContext } from "react";
import { ControlFlow } from "../App";
import { RemoveSucces } from "./RemoveSucces";

const Modal = (prop) => {
  const { isRemove, setIsRemove, removeSucces, setRemoveSucces, setEditItem } = useContext(ControlFlow);
  return (
    <div
      id="modal-container"
      style={{
        display: prop.toggle.show ? "flex" : "none",
      }}
      onClick={() => {
        prop.toggle.setShow(!prop.toggle.show);
        setEditItem(false);
        setIsRemove(false);
        setRemoveSucces(false);
      }}
    >
      {isRemove ? (
        removeSucces ? (
          <RemoveSucces />
        ) : (
          <ConfirmRemove toggle={prop.toggle} />
        )
      ) : (
        <AddTodoItem toggle={prop.toggle} />
      )}
    </div>
  );
};

export default Modal;
