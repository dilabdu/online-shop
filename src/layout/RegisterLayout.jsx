import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function RegisterLayout() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
}

export default RegisterLayout;
