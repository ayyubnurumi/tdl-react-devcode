import { useContext } from "react";
import { ControlFlow } from "../App";
import alertIcon from "../assets/icon-alert-sm.1484df0d.svg";

export const RemoveSucces = () => {
  const { isActivity } = useContext(ControlFlow);
  return (
    <div id="remove-succes">
      <img src={alertIcon} alt="alert-icon" />
      {isActivity ? "Activity" : "List Item"} berhasil dihapus
    </div>
  );
};
