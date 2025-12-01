import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../Molecules/WhatsAppButton";
// import HIMTIChat from "../Organisms/HIMTIChat";
// import PwaInstallBanner from "../Molecules/PwaInstallBanner";

// Layout principal com navbar, conteúdo e footer
const MainLayout = () => {
  return (
    <>
      <div className="bg-gray-50 font-sans text-secondary min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
      {/* <HIMTIChat /> */}
      {/* <PwaInstallBanner /> */}
    </>
  );
};

export default MainLayout;
