import React, { useEffect, useState } from "react";
import { appRoutes } from "./appRoutes";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import checkIfUserIsLoggedIn from "./utils/handleAuth";
const apiUrl = import.meta.env.VITE_API_URL;

function AppRouter() {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { isLogged } = await checkIfUserIsLoggedIn(apiUrl);
      if (isLogged) {
        navigate("/home");
      } else {
        navigate("/");
      }
      setCheckingAuth(false);
    };

    checkAuthStatus();
  }, [navigate]);

  if (checkingAuth) return null; // or loading spinner

  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        />
      ))}
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
