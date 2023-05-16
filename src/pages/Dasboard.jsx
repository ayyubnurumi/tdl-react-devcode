// import React from 'react'
import emptyActivity from "../assets/activity-empty-state.png"

export const Dasboard = () => {
  return (
    <>
    <div>
      <h2>Activity</h2>
      <button>+ tambah</button>
    </div>
    <img src={emptyActivity} alt="empty-state"></img>
    </>
  )
}
