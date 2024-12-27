import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Salad from "./pages/Salad";
import Policy from "./pages/Policy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"salads",
        element: <Salad />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"policy",
        element: <Policy />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
