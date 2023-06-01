import { createContext, useEffect, useState, useCallback } from "react";
import emptyActivity from "../assets/activity-empty-state.png";
import ActivityCard from "../components/ActivityCard";
import { activity } from "../services/services";
import Modal from "../components/Modal";
// import { useNavigate } from "react-router-dom";

const ControlFlow = createContext();

export const Dasboard = () => {
  const [isActivity, setIsActivity] = useState(true);
  const [isRemove, setIsRemove] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  // const nav = useNavigate();

  const addActivity = useCallback(() => {
    activity.createActivity(setData);
  }, [setData]);

  useEffect(() => {
    activity.getActivity(setData);
  }, [addActivity]);

  return (
    <ControlFlow.Provider
      value={{
        isActivity,
        setIsActivity,
        isRemove,
        setIsRemove,
        show,
        setShow,
        data,
        setData,
      }}
    >
      <div className="section-header">
        <h2 className="section-title">Activity</h2>
        <button onClick={addActivity} className="add-btn">
          + tambah
        </button>
      </div>
      <div className="section-body">
        {data?.length > 0 ? (
          data.map((item) => {
            return (
              <div
                id="activity-card-container"
                key={item.id}
              >
                <ActivityCard
                  data={item}
                  setShow={setShow}
                  show={show}
                  setIsActivity={setIsActivity}
                  isRemove={isRemove}
                  setIsRemove={setIsRemove}
                />
                <Modal
                  show={show}
                  setShow={setShow}
                  data={item}
                  setData={setData}
                  isActivity={isActivity}
                  isRemove={isRemove}
                  setIsRemove={setIsRemove}
                />
              </div>
            );
          })
        ) : (
          <img src={emptyActivity} alt="empty-state" />
        )}
      </div>
    </ControlFlow.Provider>
  );
};
