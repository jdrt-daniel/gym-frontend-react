import { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Messages } from "primereact/messages";
import { Toast } from "primereact/toast";

import { useValidateForm } from "../hooks/form.hooks";
import { logIn } from "../features/auth/auth.slice";
import { login } from "../services/login.service";
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido.").required("Campo requerido."),
  password: Yup.string()
    .min(6, "Debe contener al menos 6 caractéres.")
    .max(50, "Cantidad máxima de caractéres superado.")
    .required("Campo requerido."),
});

const Login = () => {
  const email = localStorage.getItem("email");
  const remember = localStorage.getItem("remember");
  const token = localStorage.getItem("token");

  const msgs = useRef<Messages>(null);
  const toast = useRef<Toast>(null);
  const [checked, setChecked] = useState(remember == "true" ? true : false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: email ?? "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (dataSend) => {
      if (checked) {
        localStorage.setItem("email", dataSend.email);
        localStorage.setItem("remember", "true");
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("remember");
      }
      try {
        const { data } = await login(dataSend.email, dataSend.password);
        dispatch(logIn(data.token));
        toast.current?.show({
          severity: "success",
          summary: "Correcto!",
          detail: "Redireccionando",
          life: 3000,
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } catch (error: any) {
        console.log(error);
        msgs.current?.show({
          sticky: true,
          severity: "error",
          summary: "Error",
          detail: error.response.data.message,
          closable: true,
        });
        formik.resetForm();
      }
    },
  });

  const { getFormErrorMessage, isFormFieldInvalid } = useValidateForm(formik);

  return token ? (
    <Navigate to="/home" replace />
  ) : (
    <main className="main" id="top">
      <div className="row vh-100 g-0">
        <div className="col-lg-6 position-relative d-none d-lg-block">
          <div
            className="bg-holder"
            style={{
              backgroundImage: "url(/src/assets/img/bg/portada.webp)",
            }}
          ></div>
        </div>
        <div className="col-lg-6">
          <form
            onSubmit={formik.handleSubmit}
            className="row flex-center h-100 g-0 px-4 px-sm-0"
          >
            <div className="col col-sm-6 col-lg-7 col-xl-6">
              <a
                className="d-flex flex-center text-decoration-none mb-4"
                href="#"
              >
                <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                  <img
                    src="src/assets/img/logos/logo-gym.webp"
                    alt="phoenix"
                    width="100"
                  />
                </div>
              </a>
              <div className="text-center mb-7">
                <h3 className="text-1000">Ingresar</h3>
                <p className="text-700">Get access to your account</p>
              </div>
              <button
                className="btn btn-phoenix-secondary w-100 mb-3"
                type="button"
              >
                <span className="fab fa-google text-danger me-2 fs--1"></span>
                Ingresar con google
              </button>
              <button className="btn btn-phoenix-secondary w-100" type="button">
                <span className="fab fa-facebook text-primary me-2 fs--1"></span>
                Ingresar con facebook
              </button>
              <div className="position-relative">
                <hr className="bg-200 mt-5 mb-4" />
                <div className="divider-content-center">o usa tu correo</div>
              </div>
              <Messages ref={msgs} />
              <Toast ref={toast} />
              <div className="mb-3 text-start">
                <label className="form-label" htmlFor="email">
                  Dirección de correo
                </label>
                <div>
                  <span className="p-input-icon-left w-100">
                    <i className="fas fa-user text-900  form-icon" />
                    <InputText
                      placeholder="Ingresa tu correo"
                      name="email"
                      value={formik.values.email}
                      onChange={(e) => {
                        formik.setFieldValue("email", e.target.value);
                      }}
                      className={classNames("form-control", {
                        "p-invalid": isFormFieldInvalid("email"),
                      })}
                    />
                  </span>
                </div>
                {getFormErrorMessage("email")}
              </div>
              <div className="mb-3 text-start">
                <label className="form-label" htmlFor="password">
                  Contraseña
                </label>
                <div>
                  <span className="p-input-icon-left w-100">
                    <i className="fas fa-key text-900 form-icon" />
                    <InputText
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      name="password"
                      value={formik.values.password}
                      onChange={(e) => {
                        formik.setFieldValue("password", e.target.value);
                      }}
                      className={classNames("form-control", {
                        "p-invalid": isFormFieldInvalid("password"),
                      })}
                    />
                  </span>
                </div>
                {getFormErrorMessage("password")}
              </div>
              <div className="row flex-between-center mb-7">
                <div className="col-auto">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input"
                      id="basic-checkbox"
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label
                      className="form-check-label mb-0"
                      htmlFor="basic-checkbox"
                    >
                      Recordarme
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <a className="fs--1 fw-semi-bold" href="#">
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <button className="btn btn-primary w-100 mb-3" type="submit">
                Ingresar
              </button>
              <div className="text-center">
                <a className="fs--1 fw-bold" href="#">
                  Crear una cuenta
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
