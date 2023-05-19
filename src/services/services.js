import axios from "axios";

axios.defaults.baseURL = "https://todo.api.devcode.gethired.id/";

const getActivity = (setData) => {
  axios
    .get("activity-groups?email=ayyubabdulrahman17%40gmail.com")
    .then((res) => setData(res.data.data))
    .catch((err) => console.error(err));
};

const createActivity = (data, setData) => {
  axios
    .post("activity-groups", {
      title: "New Activity",
      email: "ayyubabdulrahman17@gmail.com",
    })
    .then((res) => {
      setData(...data, res.data)
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const updateActivity = ({ id, title }) => {
  axios
    .patch(`activity-groups/${id}`, { title })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const removeActivity = (id) => {
  axios
    .delete(`activity-groups/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const activity = {
  getActivity,
  createActivity,
  updateActivity,
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

const createItem = () => {
  axios
    .post("todo-items")
    .then((res) => {
      console.log(res);
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

const removeItem = ({ id }) => {
  axios
    .delete(`todo-items/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const ToDoItem = [getItem, createItem, updateItem, removeItem];
