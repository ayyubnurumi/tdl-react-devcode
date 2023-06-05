// import { useState } from "react";
import title from "./assets/header-title.png";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dasboard } from "./pages/Dasboard";
import { ItemList } from "./pages/ItemList";
import { createContext, useState } from "react";

export const ControlFlow = createContext();
export const ActivityData = createContext();

function App() {
  const [isActivity, setIsActivity] = useState(true);
  const [isRemove, setIsRemove] = useState(false);
  const [removeSucces, setRemoveSucces] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const router = createBrowserRouter([
    { path: "/", element: <Dasboard /> },
    { path: "item-list/:id", element: <ItemList /> },
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
            removeSucces, setRemoveSucces,
            show,
            setShow, data, setData
          }}
        >
          <RouterProvider router={router} />
        </ControlFlow.Provider>
      </main>
    </>
  );
}

export default App;
