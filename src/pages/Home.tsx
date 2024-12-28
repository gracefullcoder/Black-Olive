import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsappButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Home;
