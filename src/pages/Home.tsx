import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappButton";
import Cart from "../components/Cart";

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Outlet />
        <Cart />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;
