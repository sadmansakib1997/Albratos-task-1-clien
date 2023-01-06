import logo from "./logo.svg";
import "./App.css";

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
