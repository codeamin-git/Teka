import {
    createBrowserRouter
  } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        
      ]
    },
  ]);

export default router;