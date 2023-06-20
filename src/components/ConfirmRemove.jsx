import { ActivityData, ControlFlow, ToDoItem } from "../App";
import removeAlert from "../assets/icon-alert.8a9d9385.svg";
import { activity, toDoItem } from "../services/services";
import { useContext } from "react";

const ConfirmRemove = (prop) => {
  const { isActivity, setRemoveSucces, setData } = useContext(ControlFlow);
  const Act = useContext(ActivityData);
  const { todoItem, setTodoItem } = useContext(ToDoItem);
  const kinda = isActivity ? "activity" : "list item";
  return (
    <div id="remove-container" onClick={(e) => e.stopPropagation()}>
      <img src={removeAlert} alt="remove-alert" />
      <p>
        apakah anda yakin ingin menghapus {kinda}{" "}
        <b>&ldquo;{isActivity ? Act.title : todoItem.title}&rdquo;?</b>
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
          onClick={(e) => {e.stopPropagation();
            isActivity
              ? activity.removeActivity(Act.id, setData)
              : toDoItem.removeItem(
                  todoItem.id,
                  todoItem.activity_group_id,
                  setTodoItem
                );
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
