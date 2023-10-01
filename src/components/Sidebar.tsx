import { PieChart } from "react-feather";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-vertical navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse">
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-1"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="nv-1"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon">
                        <span className="fas fa-caret-right"></span>
                      </div>
                      <span className="nav-link-icon">
                        <PieChart size={15} />
                      </span>
                      <span className="nav-link-text">Home</span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent show"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-1"
                    >
                      <li className="nav-item">
                        <NavLink
                          to="dashboard"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Dashboard</span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="clients"
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Clientes</span>
                          </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="index-2.html"
                          data-bs-toggle=""
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Usuarios</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-vertical-footer">
          <button className="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center">
            <span className="uil uil-left-arrow-to-left fs-0"></span>
            <span className="uil uil-arrow-from-right fs-0"></span>
            <span className="navbar-vertical-footer-text ms-2">
              Collapsed View
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
