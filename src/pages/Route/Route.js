import { createBrowserRouter } from "react-router-dom";
import AddTask from "../AddTask";
import Compeletedtask from "../Compeletedtask/Compeletedtask";
import Main from "../layout/Main";
import Mytask from "../Mytask";
import Updatetask from "./Updatetask";
// import Updatetask from "../Mytask/Updatetask";
// import Addtask from "../Addtask/Addtask";
// import Mytask from "../Mytask/Mytask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/mytask",
        element: <Mytask></Mytask>,
      },
      {
        path: "/comtask",
        element: <Compeletedtask></Compeletedtask>,
      },
      {
        path: "/update/:id",
        element: <Updatetask></Updatetask>,
      },
    ],
  },
]);

export default router;
