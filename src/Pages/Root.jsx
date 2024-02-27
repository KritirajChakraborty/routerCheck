import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
export default function RootLayout() {
  return (
    <>
      <h1>THIS IS THE ROOT PAGE</h1>
      <MainNavigation />

      <Outlet />
    </>
  );
}
