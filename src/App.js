import logo from "./logo.svg";
import "./App.css";

import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import Nav from "./Nav/Nav";
import { RouterProvider } from "react-router-dom";
import router from "./pages/Route/Route";

function App() {
  return (
    <div className="max-w-[1080px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
