import { useEffect, useState } from "react";
import emptyActivity from "../assets/activity-empty-state.png";
import ActivityCard from "../components/ActivityCard";
import { activity } from "../services/services";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

export const Dasboard = () => {
  const [isActivity, setIsActivity] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const nav = useNavigate();
  
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
                onClick={() => {
                    nav(`item-list/${item.id}`);
                    setIsActivity(!isActivity);
                  }
                }
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
          <img
            src={emptyActivity}
            alt="empty-state"
          />
        )}
      </div>
    </>
  );
};
