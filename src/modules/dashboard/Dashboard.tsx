const Dashboard = () => {
  return (
    <div className="row gy-3 mb-4 justify-content-between">
      <div className="col-xxl-6">
        <h2 className="mb-2 text-1100">CRM Dashboard</h2>
        <h5 className="text-700 fw-semi-bold mb-4">
          Check your business growth in one place
        </h5>
        <div className="row g-3 mb-3">
          <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex d-sm-block justify-content-between">
                  <div className="border-bottom-sm mb-sm-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex align-items-center icon-wrapper-sm shadow-primary-100"
                        style={{ transform: "rotate(-7.45deg);" }}
                      >
                        <span className="fa-solid fa-phone-alt text-primary fs-1 z-index-1 ms-2"></span>
                      </div>
                      <p className="text-700 fs--1 mb-0 ms-2 mt-3">
                        Outgoing call
                      </p>
                    </div>
                    <p className="text-primary mt-2 fs-2 fw-bold mb-0 mb-sm-4">
                      3 <span className="fs-0 text-900 lh-lg">Leads Today</span>
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center flex-between-end d-sm-block text-end text-sm-start">
                    <span className="badge badge-phoenix badge-phoenix-success fs--2 mb-2">
                      +24.5%
                    </span>
                    <p className="mb-0 fs--1 text-700">Than Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex d-sm-block justify-content-between">
                  <div className="border-bottom-sm mb-sm-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex align-items-center icon-wrapper-sm shadow-info-100"
                        style={{ transform: "rotate(-7.45deg);" }}
                      >
                        <span className="fa-solid fa-calendar text-info fs-1 z-index-1 ms-2"></span>
                      </div>
                      <p className="text-700 fs--1 mb-0 ms-2 mt-3">
                        Outgoing call
                      </p>
                    </div>
                    <p className="text-info mt-2 fs-2 fw-bold mb-0 mb-sm-4">
                      12 <span className="fs-0 text-900 lh-lg">This Week</span>
                    </p>
                  </div>
                  <div className="d-flex flex-column justify-content-center flex-between-end d-sm-block text-end text-sm-start">
                    <span className="badge badge-phoenix badge-phoenix-warning fs--2 mb-2">
                      +24.5%
                    </span>
                    <p className="mb-0 fs--1 text-700">Than last week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-6 col-xxl-4 gy-5 gy-md-3">
            <div className="border-bottom">
              <h5 className="pb-4 border-bottom">Top 5 Lead Sources</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent list-group-crm fw-bold text-900 fs--1 py-2">
                  <div className="d-flex justify-content-between">
                    <span className="fw-normal fs--1 mx-1">
                      {" "}
                      <span className="fw-bold">1. </span>None{" "}
                    </span>
                    <span>(65)</span>
                  </div>
                </li>
                <li className="list-group-item bg-transparent list-group-crm fw-bold text-900 fs--1 py-2">
                  <div className="d-flex justify-content-between">
                    <span className="fw-normal mx-1">
                      <span className="fw-bold">2. </span>Online Store
                    </span>
                    <span>(74)</span>
                  </div>
                </li>
                <li className="list-group-item bg-transparent list-group-crm fw-bold text-900 fs--1 py-2">
                  <div className="d-flex justify-content-between">
                    <span className="fw-normal fs--1 mx-1">
                      <span className="fw-bold">3.</span> Advertisement
                    </span>
                    <span>(32)</span>
                  </div>
                </li>
                <li className="list-group-item bg-transparent list-group-crm fw-bold text-900 fs--1 py-2">
                  <div className="d-flex justify-content-between">
                    <span className="fw-normal fs--1 mx-1">
                      <span className="fw-bold">4.</span>Seminar Partner
                    </span>
                    <span>(25)</span>
                  </div>
                </li>
                <li className="list-group-item bg-transparent list-group-crm fw-bold text-900 fs--1 py-2">
                  <div className="d-flex justify-content-between">
                    <span className="fw-normal fs--1 mx-1">
                      {" "}
                      <span className="fw-bold">5.</span>Partner
                    </span>
                    <span>(23)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 mb-6">
        <h3>Contacts Created</h3>
        <p className="text-700 mb-1">Payment received across all channels</p>
        <div
          className="echart-contacts-created"
          style={{ minHeight: "270px", width: "100%" }}
        ></div>
      </div>
      <div className="col-12 col-xxl-6 mb-3 mb-sm-0">
        <div className="row">
          <div className="col-sm-7 col-md-8 col-xxl-8 mb-md-3 mb-lg-0">
            <h3>New Contacts by Source</h3>
            <p className="text-700">Payment received across all channels</p>
            <div className="row g-0">
              <div className="col-6 col-xl-4">
                <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-bottom border-end">
                  <div className="d-flex align-items-center mb-1">
                    <span
                      className="fa-solid fa-square fs--3 me-2 text-primary"
                      data-fa-transform="up-2"
                    ></span>
                    <span className="mb-0 fs--1 text-900">Organic</span>
                  </div>
                  <h3 className="fw-semi-bold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
                    80
                  </h3>
                </div>
              </div>
              <div className="col-6 col-xl-4">
                <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-bottom border-end-md-0 border-end-xl">
                  <div className="d-flex align-items-center mb-1">
                    <span
                      className="fa-solid fa-square fs--3 me-2 text-success"
                      data-fa-transform="up-2"
                    ></span>
                    <span className="mb-0 fs--1 text-900">Paid Search</span>
                  </div>
                  <h3 className="fw-semi-bold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
                    65
                  </h3>
                </div>
              </div>
              <div className="col-6 col-xl-4">
                <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-bottom border-end border-end-md border-end-xl-0">
                  <div className="d-flex align-items-center mb-1">
                    <span
                      className="fa-solid fa-square fs--3 me-2 text-info"
                      data-fa-transform="up-2"
                    ></span>
                    <span className="mb-0 fs--1 text-900">Direct</span>
                  </div>
                  <h3 className="fw-semi-bold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
                    40
                  </h3>
                </div>
              </div>
              <div className="col-6 col-xl-4">
                <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-end-xl border-bottom border-bottom-xl-0">
                  <div className="d-flex align-items-center mb-1">
                    <span
                      className="fa-solid fa-square fs--3 me-2 text-info-300"
                      data-fa-transform="up-2"
                    ></span>
                    <span className="mb-0 fs--1 text-900">Social</span>
                  </div>
                  <h3 className="fw-semi-bold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
                    220
                  </h3>
                </div>
              </div>
              <div className="col-6 col-xl-4">
                <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-end">
                  <div className="d-flex align-items-center mb-1">
                    <span
                      className="fa-solid fa-square fs--3 me-2 text-danger-200"
                      data-fa-transform="up-2"
                    ></span>
                    <span className="mb-0 fs--1 text-900">Referrals</span>
                  </div>
                  <h3 className="fw-semi-bold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
                    120
                  </h3>
                </div>
              </div>
              <div className="col-6 col-xl-4">
                <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1">
                  <div className="d-flex align-items-center mb-1">
                    <span
                      className="fa-solid fa-square fs--3 me-2 text-warning-300"
                      data-fa-transform="up-2"
                    ></span>
                    <span className="mb-0 fs--1 text-900">Others</span>
                  </div>
                  <h3 className="fw-semi-bold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
                    35
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-4 col-xxl-4 my-3 my-sm-0">
            <div className="position-relative d-flex flex-center mb-sm-4 mb-xl-0 echart-contact-by-source-container mt-sm-7 mt-lg-4 mt-xl-0">
              <div
                className="echart-contact-by-source"
                style={{ minHeight: "245px", width: "100%" }}
              ></div>
              <div
                className="position-absolute rounded-circle bg-primary-100 top-50 start-50 translate-middle d-flex flex-center"
                style={{ height: "100px", width: "100px" }}
              >
                <h3
                  className="mb-0 text-primary-600 dark__text-primary-300 fw-bolder"
                  data-label="data-label"
                ></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xxl-6 mb-8">
        <div className="mb-3">
          <h3>New Users &amp; Leads</h3>
          <p className="text-700 mb-0">Payment received across all channels</p>
        </div>
        <div className="row g-6">
          <div className="col-md-6 mb-2 mb-sm-0">
            <div className="d-flex align-items-center">
              <span
                className="me-2 text-info"
                data-feather="users"
                style={{ minHeight: "24px", width: "24px" }}
              ></span>
              <h4 className="text-600 mb-0">
                New Users :<span className="text-1100"> 42</span>
              </h4>
              <span className="badge badge-phoenix fs--2 badge-phoenix-success d-inline-flex align-items-center ms-2">
                <span className="badge-label d-inline-block lh-base">
                  +24.5%
                </span>
                <span className="ms-1 fa-solid fa-caret-up d-inline-block lh-1"></span>
              </span>
            </div>
            <div className="pb-0 pt-4">
              <div
                className="echarts-new-users"
                style={{ minHeight: "110px", width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span
                className="me-2 text-primary"
                data-feather="zap"
                style={{ minHeight: "24px", width: "24px" }}
              ></span>
              <h4 className="text-600 mb-0">
                New Leads :<span className="text-1100">45</span>
              </h4>
              <span className="badge badge-phoenix fs--2 badge-phoenix-success d-inline-flex align-items-center ms-2">
                <span className="badge-label d-inline-block lh-base">
                  +30.5%
                </span>
                <span className="ms-1 fa-solid fa-caret-up d-inline-block lh-1"></span>
              </span>
            </div>
            <div className="pb-0 pt-4">
              <div
                className="echarts-new-leads"
                style={{ minHeight: "110px", width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xxl-6">
        <div className="row align-items-start justify-content-between mb-4 g-3">
          <div className="col-auto">
            <h3>Ad Clicks</h3>
            <p className="text-700 lh-sm mb-0">
              Check effectiveness of your ads
            </p>
          </div>
          <div className="col-12 col-sm-4">
            <select
              className="form-select form-select-sm"
              id="select-ad-clicks-month"
            >
              <option>Mar 1 - 31, 2022</option>
              <option>April 1 - 30, 2022</option>
              <option>May 1 - 31, 2022</option>
            </select>
          </div>
        </div>
        <div
          className="echart-add-clicks-chart"
          style={{ minHeight: "385px", width: "100%" }}
        ></div>
      </div>
      <div className="col-12 col-xxl-6 mb-6 gy-0 gy-xxl-3">
        <div className="row align-items-start justify-content-between mb-4 g-3">
          <div className="col-auto">
            <h3>
              Deal Forecast<span className="fw-semi-bold">- $90,303</span>
            </h3>
            <p className="text-700 mb-1">Show what you offer here</p>
          </div>
          <div className="col-12 col-sm-4">
            <select
              className="form-select form-select-sm"
              id="select-ad-forcast-month"
            >
              <option>Mar 1 - 31, 2022</option>
              <option>April 1 - 30, 2022</option>
              <option>May 1 - 31, 2022</option>
            </select>
          </div>
        </div>
        <div className="w-100">
          <div className="d-flex flex-start">
            <p
              className="mb-2 text-700 fw-semi-bold fs--1"
              style={{ width: "20.72%" }}
            >
              $21.0k
            </p>
            <p
              className="mb-2 text-700 fw-semi-bold fs--1"
              style={{ width: "35.76%" }}
            >
              $3.4k
            </p>
            <p
              className="mb-2 text-700 fw-semi-bold fs--1"
              style={{ width: "25.38%" }}
            >
              $15.1k
            </p>
            <p
              className="mb-2 text-700 fw-semi-bold fs--1"
              style={{ width: "25.14%" }}
            >
              $4.6k
            </p>
          </div>
          <div className="progress mb-3 rounded-3" style={{ height: "10px" }}>
            <div
              className="progress-bar border-end border-white border-2"
              role="progressbar"
              style={{ width: "20.72%" }}
              aria-valuenow="20.72"
              aria-valuemin="0"
              aria-valuemax="100"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Appointment"
            ></div>
            <div
              className="progress-bar bg-primary-300 border-end border-white border-2"
              role="progressbar"
              style={{ width: "35.76%" }}
              aria-valuenow="35.76"
              aria-valuemin="0"
              aria-valuemax="100"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Qualified"
            ></div>
            <div
              className="progress-bar bg-success border-end border-white border-2"
              role="progressbar"
              style={{ width: "25.38%" }}
              aria-valuenow="25.38"
              aria-valuemin="0"
              aria-valuemax="100"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Closed Won"
            ></div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "25.14%" }}
              aria-valuenow="25.14"
              aria-valuemin="0"
              aria-valuemax="100"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Contact Sent"
            ></div>
          </div>
        </div>
        <h4 className="mt-4 mb-3">Deal Forecast by Owner </h4>
        <div
          className="border-top border-bottom-0 border-300"
          id="dealForecastTable"
          data-list='{"valueNames":["contact","appointment","qualified","closed-won","contact-sent"],"page":5}'
        >
          <div className="table-responsive scrollbar">
            <table className="table fs--1 mb-0">
              <thead>
                <tr>
                  <th
                    className="sort border-end white-space-nowrap align-middle ps-0 text-uppercase text-700"
                    scope="col"
                    data-sort="contact"
                    style={{ width: "15%", minWidth: "100px" }}
                  >
                    Contact
                  </th>
                  <th
                    className="sort border-end align-middle text-end px-3 text-uppercase text-700"
                    scope="col"
                    data-sort="appointment"
                    style={{ width: "15%", minWidth: "95px" }}
                  >
                    <div className="d-inline-flex flex-center">
                      <span
                        className="fa-solid fa-square fs--3 text-primary me-2"
                        data-fa-transform="up-2"
                      ></span>
                      <span className="mb-0 fs--1">Appointment</span>
                    </div>
                  </th>
                  <th
                    className="sort border-end align-middle text-end px-3 text-uppercase text-700"
                    scope="col"
                    data-sort="qualified"
                    style={{ width: "20%", minWidth: "100px" }}
                  >
                    <div className="d-inline-flex flex-center">
                      <span
                        className="fa-solid fa-square fs--3 text-primary-300 me-2"
                        data-fa-transform="up-2"
                      ></span>
                      <span className="mb-0 fs--1">Qualified</span>
                    </div>
                  </th>
                  <th
                    className="sort border-end align-middle text-end px-3 text-uppercase text-700"
                    scope="col"
                    data-sort="closed-won"
                    style={{ width: "20%", minWidth: "100px" }}
                  >
                    <div className="d-inline-flex flex-center">
                      <span
                        className="fa-solid fa-square fs--3 text-success me-2"
                        data-fa-transform="up-2"
                      ></span>
                      <span className="mb-0 fs--1">Closed Won</span>
                    </div>
                  </th>
                  <th
                    className="sort align-middle text-end ps-3 text-uppercase text-700"
                    scope="col"
                    data-sort="contact-sent"
                    style={{ width: "20%", minWidth: "100px" }}
                  >
                    <div className="d-inline-flex flex-center">
                      <span
                        className="fa-solid fa-square fs--3 text-info me-2"
                        data-fa-transform="up-2"
                      ></span>
                      <span className="mb-0 fs--1">Contact Sent</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="list" id="table-deal-forecast-body">
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="contact border-end align-middle white-space-nowrap py-2 ps-0 px-3">
                    <a className="fw-semi-bold" href="#!">
                      Carrie Anne
                    </a>
                  </td>
                  <td className="appointment border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    1000
                  </td>
                  <td className="qualified border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $1256
                  </td>
                  <td className="closed-won border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $1200
                  </td>
                  <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semi-bold text-900 ps-3 py-2">
                    $1200
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="contact border-end align-middle white-space-nowrap py-2 ps-0 px-3">
                    <a className="fw-semi-bold" href="#!">
                      Milind Mikuja
                    </a>
                  </td>
                  <td className="appointment border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    558
                  </td>
                  <td className="qualified border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $2531
                  </td>
                  <td className="closed-won border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $2200
                  </td>
                  <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semi-bold text-900 ps-3 py-2">
                    $2200
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="contact border-end align-middle white-space-nowrap py-2 ps-0 px-3">
                    <a className="fw-semi-bold" href="#!">
                      Stanley Drinkwater
                    </a>
                  </td>
                  <td className="appointment border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    1100
                  </td>
                  <td className="qualified border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $100
                  </td>
                  <td className="closed-won border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $100
                  </td>
                  <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semi-bold text-900 ps-3 py-2">
                    $100
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="contact border-end align-middle white-space-nowrap py-2 ps-0 px-3">
                    <a className="fw-semi-bold" href="#!">
                      Josef Stravinsky
                    </a>
                  </td>
                  <td className="appointment border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    856
                  </td>
                  <td className="qualified border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $326
                  </td>
                  <td className="closed-won border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $265
                  </td>
                  <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semi-bold text-900 ps-3 py-2">
                    $265
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="contact border-end align-middle white-space-nowrap py-2 ps-0 px-3">
                    <a className="fw-semi-bold" href="#!">
                      Roy Anderson
                    </a>
                  </td>
                  <td className="appointment border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    1200
                  </td>
                  <td className="qualified border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $1452
                  </td>
                  <td className="closed-won border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $865
                  </td>
                  <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semi-bold text-900 ps-3 py-2">
                    $865
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="contact border-end align-middle white-space-nowrap py-2 ps-0 px-3">
                    <a className="fw-semi-bold" href="#!">
                      Oscar Wilde
                    </a>
                  </td>
                  <td className="appointment border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    1020
                  </td>
                  <td className="qualified border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $950
                  </td>
                  <td className="closed-won border-end align-middle white-space-nowrap text-end fw-semi-bold text-900 py-2 px-3">
                    $1000
                  </td>
                  <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semi-bold text-900 ps-3 py-2">
                    $800
                  </td>
                </tr>
              </tbody>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                <td className="align-middle border-bottom-0 border-end white-space-nowrap text-end fw-bold text-1100 pt-2 lh-sm pb-0 px-3">
                  {" "}
                </td>
                <td className="align-middle border-bottom-0 border-end white-space-nowrap text-end fw-bold text-1100 pt-2 lh-sm pb-0 px-3">
                  4,744
                </td>
                <td className="align-middle border-bottom-0 border-end white-space-nowrap text-end fw-bold text-1100 pt-2 lh-sm pb-0 px-3">
                  $5,665
                </td>
                <td className="align-middle border-bottom-0 border-end white-space-nowrap text-end fw-bold text-1100 pt-2 lh-sm pb-0 px-3">
                  $4630
                </td>
                <td className="border-bottom-0 align-middle white-space-nowrap text-end fw-bold text-1100 pt-2 pb-0 ps-3">
                  $4630
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
