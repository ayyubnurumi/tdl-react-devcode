// import React from 'react'
import removeAlert from "../assets/icon-alert.8a9d9385.svg";
import PropType from "prop-types";

const ConfirmRemove = ({ isActivity, data }) => {
  const kinda = isActivity ? "activity" : "list item";
  return (
    <div id="remove-container">
      <img src={removeAlert} alt="remove-alert" />
      <p>
        apakah anda yakin ingin menghapus {kinda} <b>&ldquo;{data.title}&rdquo;?</b>
      </p>
      <div>
        <button className="delete-cancel-btn">batal</button>
        <button className="delete-confirm-btn">hapus</button>
      </div>
    </div>
  );
};

ConfirmRemove.propTypes = {
  isActivity: PropType.bool.isRequired,
  data: PropType.object.isRequired
}

export default ConfirmRemove;