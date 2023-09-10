import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = createBrowserRouter([
  {
    path: "/movie/:id",
    element: <Detail />
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default App;
