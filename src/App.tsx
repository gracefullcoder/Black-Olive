import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Salad from "./pages/Salad";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import MemberShip from "./pages/MemberShip";
import AboutUs from "./components/AboutUs";
import PageNotFound from "./components/PageNotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "salads",
        element: <Salad />
      },
      {
        path: "membership",
        element: <MemberShip />
      },
      {
        path: "product",
        element: <ProductDetails />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "policy",
        element: <PrivacyPolicy />
      },
      {
        path: "terms",
        element: <TermsAndConditions />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
