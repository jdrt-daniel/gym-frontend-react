import { Link } from "react-router-dom";
const Home404 = () => {
  return (
    <>
      <div className="px-3">
        <div className="row  flex-center p-5">
          <div className="col-12 col-xl-10 col-xxl-8">
            <div className="row justify-content-center align-items-center g-5">
              <div className="col-12 col-lg-6 text-center order-lg-1">
                <img
                  className="img-fluid w-lg-100 d-dark-none"
                  src="src/assets/img/spot-illustrations/404-illustration.png"
                  alt=""
                  width="400"
                />
                <img
                  className="img-fluid w-md-50 w-lg-100 d-light-none"
                  src="src/assets/img/spot-illustrations/dark_404-illustration.png"
                  alt=""
                  width="540"
                />
              </div>
              <div className="col-12 col-lg-6 text-center text-lg-start">
                <img
                  className="img-fluid mb-6 w-50 w-lg-75 d-dark-none"
                  src="src/assets/img/spot-illustrations/404.png"
                  alt=""
                />
                <img
                  className="img-fluid mb-6 w-50 w-lg-75 d-light-none"
                  src="src/assets/img/spot-illustrations/dark_404.png"
                  alt=""
                />
                <h2 className="text-800 fw-bolder mb-3">
                  Página no encontrada!
                </h2>
                <p className="text-900 mb-5">
                  Pero no te preocupes! Nuestra avestruz esta buscando por todos
                  lados mientras tu esperas seguro.
                </p>
                <Link className="btn btn-lg btn-primary" to="" replace>
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home404;
