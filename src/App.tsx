import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Salad from "./pages/Salad";
import Policy from "./pages/Policy";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import MemberShip from "./pages/MemberShip";
import AboutUs from "./components/AboutUs";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"salads",
        element: <Salad />
      },
      {
        path:"membership",
        element: <MemberShip />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path:"about",
        element:<AboutUs />
      },
      {
        path:"policy",
        element: <Policy />
      },
      {
        path:"product",
        element: <ProductDetails />
      },
      {
        path:"*",
        element: <PageNotFound />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
