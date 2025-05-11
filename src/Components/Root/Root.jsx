import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';

const titles = {
    "/": "Home | Gadget Heaven",
    "/statistics": "Statistics | Gadget Heaven",
    "/dashboard": "Dashboard | Gadget Heaven",
    "/productdetails": "Product | Gadget Heaven",
};

export default function Root() {
     const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Gadget Heaven";
  }, [location.pathname]);
    
  return (
    <div className="max-w-screen-5xl mx-auto px-6 md:px-16 lg:px-28">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
         <ToastContainer />
    </div>
  )
}
