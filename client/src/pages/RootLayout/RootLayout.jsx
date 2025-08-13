import { Outlet } from "react-router-dom";
import "./RootLayout.scss";

export default function RootLayout() {
  return (
    <main className="rootLayout">
      <header className="header">
      <h1>Users List</h1>
      </header>
      <Outlet />
    </main>
  );
}
