import PropType from "prop-types";
import ConfirmRemove from "./ConfirmRemove";
import { AddTodoItem } from "./AddTodoItem";

const Modal = ({ show, setShow, data, setData, isActivity, isRemove }) => {
  // const modalContainer = document.getElementById("modal-container");
  return (
    <div
      id="modal-container"
      // onClick={() => {
      //   setShow(!show);
      // }}
      style={{
        display: show ? "flex" : "none",
      }}
    >
      {isRemove ? (
        <ConfirmRemove data={data} isActivity={isActivity} setData={setData} setShow={setShow}/>
      ) : (
        <AddTodoItem />
      )}
    </div>
  );
};

Modal.propTypes = {
  show: PropType.bool.isRequired,
  setShow: PropType.func.isRequired,
  data: PropType.object,
  setData: PropType.func,
  isActivity: PropType.bool,
  isRemove: PropType.bool
};

export default Modal;
