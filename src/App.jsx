// import { useState } from "react";
import title from "./assets/header-title.png";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dasboard } from "./pages/Dasboard";
import { ItemList } from "./pages/ItemList";

function App() {
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
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
