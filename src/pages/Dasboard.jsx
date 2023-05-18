// import React from 'react'
import emptyActivity from "../assets/activity-empty-state.png";
import { ActivityCard } from "../components/ActivityCard";

export const Dasboard = () => {
  return (
    <>
      <div className="section-header">
        <h2>Activity</h2>
        <button className="add-btn">+ tambah</button>
      </div>
      <div className="section-body">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <img style={{flex: "1 1 100%", marginBottom: "30px"}} src={emptyActivity} alt="empty-state" />
      </div>
    </>
  );
};
