import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import UsersTable from "./components/UsersTable/UsersTable";
import CreateForm from "./components/CreateForm/CreateForm";
import UpdateForm from "./components/UpdateForm/UpdateForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <UsersTable /> },
      { path: "/create", element: <CreateForm /> },
      { path: "/update/:id", element: <UpdateForm />}
    ],
  },
]);

export default router;
