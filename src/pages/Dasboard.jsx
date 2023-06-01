import { createContext, useEffect, useState, useCallback } from "react";
import emptyActivity from "../assets/activity-empty-state.png";
import ActivityCard from "../components/ActivityCard";
import { activity } from "../services/services";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const ControlFlow = createContext();

export const Dasboard = () => {
  const [isActivity, setIsActivity] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const nav = useNavigate();

  const handleActivity = (e, id) => {
    const cardContainer = document.getElementById("activity-card-container");
    const delBtn = document.getElementById("delete-activity-btn");
    if (e.target == cardContainer && !delBtn) {
      nav(`item-list/${id}`);
      setIsActivity(!isActivity);
    }
  };
  
  const addActivity = useCallback(() => {
    activity.createActivity(data, setData);
  },[data]);

  useEffect(() => {
    activity.getActivity(setData);
  }, [addActivity]);

  console.log(data);

  return (
    <ControlFlow.Provider
      value={{ isActivity, setIsActivity, show, setShow, data, setData }}
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
                onClick={(e) => handleActivity(e, item.id)}
              >
                <ActivityCard
                  data={item}
                  setShow={setShow}
                  show={show}
                  setIsActivity={setIsActivity}
                />
                <Modal
                  show={show}
                  setShow={setShow}
                  data={item}
                  isActivity={isActivity}
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
