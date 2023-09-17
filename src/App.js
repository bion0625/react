import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/movie/:id`,
    element: <Detail />
  },
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
]);

export default App;
