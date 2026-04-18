import Login from "../components/Login.jsx"
import Browse from "../components/Browse.jsx"
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <Error />
  },
]);
