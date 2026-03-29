import { RouterProvider } from "react-router-dom";
import { appRouter } from "../routes/page.routes";

const Body = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
