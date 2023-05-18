import axios from "axios";

axios.defaults.baseURL = "https://todo.api.devcode.gethired.id/";

const getActivity = () => {
  axios
    .get("activity-groups")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const createActivity = () => {
  axios
    .post("activity-groups", {
      title: "New Activity",
      email: "ayyubabdulrahman17@gmail.com",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateActivity = ({ id, title }) => {
  axios
    .patch(`activity-groups/${id}`, { title })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const removeActivity = ({ id }) => {
  axios
    .delete(`activity-groups/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const activity = {
  getActivity,
  createActivity,
  updateActivity,
  removeActivity,
};
