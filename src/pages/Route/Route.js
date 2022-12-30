import { createBrowserRouter } from "react-router-dom";
import Addtask from "../Addtask/Addtask";
import Compeletedtask from "../Compeletedtask/Compeletedtask";
import Main from "../layout/Main";
import Mytask from "../Mytask/Mytask";
import Updatetask from "../Mytask/Updatetask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/addtask",
        element: <Addtask></Addtask>,
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
