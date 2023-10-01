import { Bell, Globe, LogOut, Moon, Settings, Sun, User } from "react-feather";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-top fixed-top navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <button
              className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalCollapse"
              aria-controls="navbarVerticalCollapse"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line"></span>
              </span>
            </button>
            <a className="navbar-brand me-1 me-sm-3" href="index-2.html">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src="src/assets/img/icons/logo.png"
                    alt="phoenix"
                    width="27"
                  />
                  <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                </div>
              </div>
            </a>
          </div>
          <div
            className="search-box navbar-top-search-box d-none d-lg-block"
            data-list='{"valueNames":["title"]}'
            style={{ width: "25rem" }}
          >
            <form
              className="position-relative"
              data-bs-toggle="search"
              data-bs-display="static"
            >
              <input
                className="form-control search-input fuzzy-search rounded-pill form-control-sm"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <span className="fas fa-search search-box-icon"></span>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input
                  className="form-check-input ms-0 theme-control-toggle-input"
                  type="checkbox"
                  data-theme-control="phoenixTheme"
                  value="dark"
                  id="themeControlToggle"
                />
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                  htmlFor="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Switch theme"
                >
                  <Moon className="icon" size={15} />
                </label>
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                  htmlFor="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Switch theme"
                >
                  <Sun className="icon" size={15} />
                </label>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                style={{ minWidth: "2.5rem" }}
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <Bell style={{ height: "20px", width: "20px" }} />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret"
                id="navbarDropdownNotfication"
                aria-labelledby="navbarDropdownNotfication"
              >
                <div className="card position-relative border-0">
                  <div className="card-header p-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-black mb-0">Notificatons</h5>
                      <button
                        className="btn btn-link p-0 fs--1 fw-normal"
                        type="button"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div
                      className="scrollbar-overlay"
                      style={{ height: "27rem" }}
                    >
                      <div className="border-300">
                        <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                          <div className="d-flex align-items-center justify-content-between position-relative">
                            <div className="d-flex">
                              <div className="avatar avatar-m status-online me-3">
                                <div className="avatar-name rounded-circle">
                                  <span>J</span>
                                </div>
                              </div>
                              <div className="flex-1 me-sm-3">
                                <h4 className="fs--1 text-black">
                                  Jane Foster
                                </h4>
                                <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
                                  <span className="me-1 fs--2">📅</span>
                                  Created an event.
                                  <span className="ms-2 text-400 fw-bold fs--2">
                                    20m
                                  </span>
                                </p>
                                <p className="text-800 fs--1 mb-0">
                                  <span className="me-1 fas fa-clock"></span>
                                  <span className="fw-bold">10:20 AM </span>
                                  August 7,2021
                                </p>
                              </div>
                            </div>
                            <div className="font-sans-serif d-none d-sm-block">
                              <button
                                className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span className="fas fa-ellipsis-h fs--2 text-900"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a className="dropdown-item" href="#!">
                                  Mark as unread
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer p-0 border-top border-0">
                    <div className="my-2 text-center fw-bold fs--2 text-600">
                      <a className="fw-bolder" href="pages/notifications.html">
                        Notification history
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link lh-1 pe-0"
                id="navbarDropdownUser"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="avatar avatar-l ">
                  <img
                    className="rounded-circle "
                    src="src/assets/img/team/40x40/57.webp"
                    alt=""
                  />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
                aria-labelledby="navbarDropdownUser"
              >
                <div className="card position-relative border-0">
                  <div className="card-body p-0">
                    <div className="text-center pt-4 pb-3">
                      <div className="avatar avatar-xl ">
                        <img
                          className="rounded-circle "
                          src="src/assets/img/team/72x72/57.webp"
                          alt=""
                        />
                      </div>
                      <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                    </div>
                  </div>
                  <div className="overflow-auto scrollbar">
                    <ul className="nav d-flex flex-column mb-2 pb-1">
                      <li className="nav-item">
                        <a className="nav-link px-3" href="#!">
                          <User size={15} className="me-2 text-900" />
                          <span>Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" href="#!">
                          <Settings size={15} className="me-2 text-900" />
                          Settings &amp; Privacy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" href="#!">
                          <Globe size={15} className="me-2 text-900" />
                          Language
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer p-0 border-top">
                    <div className="p-3">
                      <a
                        className="btn btn-phoenix-secondary d-flex flex-center w-100"
                        href="#!"
                      >
                        <LogOut size={15} className="me-2 text-900" />
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
