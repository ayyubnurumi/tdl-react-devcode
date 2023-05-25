import { useEffect, useState } from "react";
import emptyActivity from "../assets/activity-empty-state.png";
import ActivityCard from "../components/ActivityCard";
import { activity } from "../services/services";
import Modal from "../components/Modal";

export const Dasboard = () => {
  const [isActivity, setIsActivity] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const fetchActivity = () => {
    activity.getActivity(setData);
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const addActivity = () => {
    activity.createActivity(data, setData);
  };

  console.log(data);

  return (
    <>
      <div className="section-header">
        <h2>Activity</h2>
        <button onClick={addActivity} className="add-btn">
          + tambah
        </button>
      </div>
      <div className="section-body">
        {data?.length > 0 ? (
          data.map((item, i) => {
            return (
              <>
                <ActivityCard
                  key={item.id}
                  data={item}
                  setShow={setShow}
                  show={show}
                  setIsActivity={setIsActivity}
                />
                <Modal
                  key={i}
                  show={show}
                  setShow={setShow}
                  data={item}
                  isActivity={isActivity}
                />
              </>
            );
          })
        ) : (
          <img
            style={{ flex: "0 1", height: "413px", marginInline: "auto" }}
            src={emptyActivity}
            alt="empty-state"
          />
        )}
      </div>
    </>
  );
};
