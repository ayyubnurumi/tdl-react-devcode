import axios from "axios";

axios.defaults.baseURL = "https://todo.api.devcode.gethired.id/";

const getActivity = (setData) => {
  axios
    .get("activity-groups?email=ayyubabdulrahman17%40gmail.com")
    .then((res) => setData(res.data.data))
    .catch((err) => console.error(err));
};

const createActivity = (setData) => {
  axios
    .post("activity-groups", {
      title: "New Activity",
      email: "ayyubabdulrahman17@gmail.com",
    })
    .then((res) => {
      getActivity(setData);
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const updateActivity = (id, title, setData) => {
  axios
    .patch(`activity-groups/${id}`, { title })
    .then((res) => {
      activityDetail(id, setData);
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const activityDetail = (id, setData) => {
  axios
    .get(`activity-groups/${id}`)
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
};

const removeActivity = (id, setData) => {
  axios
    .delete(`activity-groups/${id}`)
    .then((res) => {
      getActivity(setData);
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const activity = {
  getActivity,
  createActivity,
  updateActivity,
  activityDetail,
  removeActivity,
};

const getItem = ({ actid }) => {
  axios
    .get("todo-items", { params: { activity_group_id: { actid } } })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const createItem = (payload, actId, setData) => {
  axios
    .post("todo-items", payload)
    .then((res) => {
      console.log(res);
      activityDetail(actId, setData)
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateItem = ({ id }) => {
  axios
    .patch(`todo-items/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const removeItem = (id, actId, setData) => {
  axios
    .delete(`todo-items/${id}`)
    .then(() => {
      activityDetail(actId, setData)
    })
    .catch((err) => {
      console.error(err);
    });
};

export const toDoItem = { getItem, createItem, updateItem, removeItem };
