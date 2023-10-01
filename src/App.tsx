import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Error404, Login } from "./pages";
import { MainLoading, ProtectedRoute } from "./components";

const AppLayout = lazy(
  () => import(/* webpackChunkName: "AppLayout" */ "./layout/AppLayout")
);

function App() {
  return (
    <Suspense fallback={<MainLoading />}>
      <HashRouter>
        <Routes>
          <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
}

export default App;
