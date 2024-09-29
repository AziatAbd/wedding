import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
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
