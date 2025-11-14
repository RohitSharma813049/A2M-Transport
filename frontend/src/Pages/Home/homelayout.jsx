import { UserNavbar } from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/footer/footer";

function HomeLayout() {
  return (
    <div>
      {/* Public site navbar */}
      <UserNavbar />

      {/* Main page content */}
      <div><Outlet /></div>

      {/* Public site footer */}
      <Footer />
    </div>
  );
}

export default HomeLayout;
