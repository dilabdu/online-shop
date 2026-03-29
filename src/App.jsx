import MainLayout from "./layout/MainLayout";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import ProtectedRoutes from "./components/ProtectedRoutes";

import Productitem from "./pages/Productitem";
import Create from "./pages/Create";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterLayout from "./layout/RegisterLayout";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/productitem/:id",
          element: <Productitem />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/",
      element: <RegisterLayout />,
      children: [
        {
          path: "/login",
          element: user ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "/register",
          element: user ? <Navigate to="/" /> : <Register />,
        },
      ],
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "login", payload: user });
      dispatch({ type: "authReady" });
    });
  }, []);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
