import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/common/Loading";
import { ToastProvider } from "./components/common/ToastContext";
import Layout from "./components/layout/Layout";

const DetailMovie = lazy(() => import("./pages/DetailMovie"));
const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Movie = lazy(() => import("./pages/Movie"));

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movies",
      element: (
        <Layout>
          <Movie />
        </Layout>
      ),
    },
    {
      path: "/movies/:imdbId",
      element: (
        <Layout>
          <DetailMovie />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <ToastProvider>
      <AnimatePresence>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </AnimatePresence>
    </ToastProvider>
  );
}
