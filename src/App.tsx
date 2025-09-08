import { createHashRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  const router = createHashRouter([
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
