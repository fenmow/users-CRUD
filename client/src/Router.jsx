import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import UsersTable from "./components/UsersTable/UsersTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <UsersTable /> }
    ]
  },
]);

export default router;
