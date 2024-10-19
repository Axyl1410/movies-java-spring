import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { ToastProvider } from "./components/common/toast/ToastContext";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <ToastProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ToastProvider>
  );
}
