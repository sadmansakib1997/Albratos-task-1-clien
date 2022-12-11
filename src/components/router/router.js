import { createBrowserRouter } from "react-router-dom";
import About from "../HOme/About/About";
import HOme from "../HOme/HOme";
import Side from "../HOme/Side/Side";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {},
      {
        // path: "/about",
        // element: <About></About>,
      },
    ],
  },
]);

export default router;
