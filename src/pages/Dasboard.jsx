// import React from 'react'
import { useEffect, useState } from "react";
import emptyActivity from "../assets/activity-empty-state.png";
import { ActivityCard } from "../components/ActivityCard";
import { activity } from "../services/services";

export const Dasboard = () => {
  const [data, setData] = useState();
  const [get, create,,] = activity
  const addActivity = () => {
    create()
  }
  useEffect(() => {
    get(setData)
  }, [get, setData]);
  console.log(data);
  return (
    <>
      <div className="section-header">
        <h2>Activity</h2>
        <button onClick={addActivity} className="add-btn">+ tambah</button>
      </div>
      <div className="section-body">
        {data && data.length > 0 ? (
          <ActivityCard />
        ):(
          <img style={{flex: "0 1 100%", marginBottom: "30px"}} src={emptyActivity} alt="empty-state" />
        )}
      </div>
    </>
  );
};
