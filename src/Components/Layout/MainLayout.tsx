import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../Molecules/WhatsAppButton";

const MainLayout: React.FC = () => {
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
    </>
  );
};

export default MainLayout;
