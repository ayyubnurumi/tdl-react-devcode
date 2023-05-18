// import React from 'react'
import emptyActivity from "../assets/activity-empty-state.png";
import { ActivityCard } from "../components/ActivityCard";
import { activity } from "../services/services";

export const Dasboard = () => {
  const addActivity = () => {
    activity.getActivity()
  }
  return (
    <>
      <div className="section-header">
        <h2>Activity</h2>
        <button onClick={addActivity} className="add-btn">+ tambah</button>
      </div>
      <div className="section-body">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <img style={{flex: "0 1 100%", marginBottom: "30px"}} src={emptyActivity} alt="empty-state" />
      </div>
    </>
  );
};
