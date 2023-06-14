import title from "./assets/header-title.png";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dasboard } from "./pages/Dasboard";
import { ItemList } from "./pages/ItemList";
import { createContext, useState } from "react";

export const ControlFlow = createContext();
export const ActivityData = createContext();
export const ToDoData = createContext();
export const ToDoItem = createContext();

function App() {
  const [isActivity, setIsActivity] = useState(true);
  const [isRemove, setIsRemove] = useState(false);
  const [removeSucces, setRemoveSucces] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [todoItem, setTodoItem] = useState({
    activity_group_id: 0,
    id: 0,
    is_active: false,
    priority: "very-high",
    title: "",
  });

  const router = createBrowserRouter([
    { path: "/", element: <Dasboard /> },
    { path: "item-list/:actId", element: <ItemList /> },
  ]);
  return (
    <>
      <nav id="header">
        <img src={title} alt="title" data-cy="header-title" />
      </nav>
      <main>
        <ControlFlow.Provider
          value={{
            isActivity,
            setIsActivity,
            isRemove,
            setIsRemove,
            removeSucces,
            setRemoveSucces,
            show,
            setShow,
            data,
            setData,
            editItem,
            setEditItem,
          }}
        >
          <ToDoItem.Provider value={{ todoItem, setTodoItem }}>
            <RouterProvider router={router} />
          </ToDoItem.Provider>
        </ControlFlow.Provider>
      </main>
    </>
  );
}

export default App;
