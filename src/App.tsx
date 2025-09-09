import { createHashRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
