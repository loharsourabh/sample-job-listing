import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="p-4 bg-[#d8d8d8]">
      <Header />
      <Outlet />
    </div>
  );
}
