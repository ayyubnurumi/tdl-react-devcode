import { useEffect, useCallback, useContext } from "react";
import emptyActivity from "../assets/activity-empty-state.png";
import ActivityCard from "../components/ActivityCard";
import { activity } from "../services/services";
import Modal from "../components/Modal";
import { ActivityData, ControlFlow } from "../App";

export const Dasboard = () => {
  const {data, setData, setIsActivity} = useContext(ControlFlow);

  const addActivity = useCallback(() => {
    activity.createActivity(setData);
  }, [setData]);

  useEffect(() => {
    activity.getActivity(setData);
    setIsActivity(true)
  }, [setData, setIsActivity]);

  return (
    <>
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
                <ActivityData.Provider value={item}>
                  <ActivityCard />
                  <Modal />
                </ActivityData.Provider>
              </div>
            );
          })
        ) : (
          <img src={emptyActivity} alt="empty-state" />
        )}
      </div>
    </>
  );
};
