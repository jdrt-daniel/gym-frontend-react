import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header, Sidebar } from "../components";
import routes from "../router/admin.routes";

function AppLayout() {
  return (
    <>
      <main
        className={`main chrome windows fontawesome-i2svg-active fontawesome-i2svg-complete `}
        id="top"
      >
        <Sidebar />
        <Header />
        <div className="content">
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {/* <Route path="dashboard" element={<Dashboard />} />
            <Route path="clients" element={<List />} /> */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}
export default AppLayout;
