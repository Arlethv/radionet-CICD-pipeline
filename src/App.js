import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import RadioNetImage from "./assets/img/RadioNet.svg";
import escuchandoMusica from "./assets/img/escuchando-musica.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validacionNombre = (value) => {
    // Expresión regular para permitir solo letras y espacios
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(value) || "El nombre debe contener solo letras.";
  };

  const validacionCorreo = (value) => {
    // Expresión regular para validar el formato de correo electrónico
    const regex = /^\S+@\S+\.[A-Za-z]+$/;
    return regex.test(value) || "El correo electrónico no es válido.";
  };

  const validacionTelefono = (value) => {
    const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    return regex.test(value) || "El número de teléfono no es válido.";
  };

  return (
    <div id="inicio">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#inicio">
            RadioNet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#acerca">
                  Acerca
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className="d-flex align-items-center"
        style={{
          backgroundImage: `url(${RadioNetImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "flex",
          minHeight: "100vh",
        }}
      >
        <div className="container px-4 px-lg-5 text-center">
          <div className="text-lg-end">
            <h1 className="text-white mb-4">Bienvenido a RadioNet: </h1>
            <div className="d-flex justify-content-center justify-content-lg-end">
              <h3>
                <em className="py-2 px-3 rounded">
                  Conéctate con la música que te mueve
                </em>
              </h3>
            </div>
            <a className="btn btn-primary btn-xl mt-4" href="#contacto">
              Escucha ahora
            </a>
          </div>
        </div>
      </header>

      <section id="acerca" className="bg-light">
        <div className="container text-center">
          <div id="info1" className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light py-5 my-0">
                <h2 className="mb-4">RadioNet</h2>
                <p className=" radio mb-4">
                  Bienvenido a <strong> RadioNet </strong>, una estación de
                  radio innovadora y joven. Estamos comprometidos en ofrecerte
                  la mejor experiencia auditiva. Nuestro equipo de profesionales
                  apasionados trabaja arduamente para brindarte la mejor calidad
                  de sonido y una programación variada que se adapte a tus
                  gustos musicales y preferencias. Nos enorgullece servir a la
                  comunidad del Bajío y más allá, brindando comunicación por
                  Internet y llevando entretenimiento a cada rincón.
                </p>
                <a href="#contacto" className="btn btn-primary">
                  Descubre más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios">
        <img
          src={escuchandoMusica}
          alt="Descripción de la imagen"
          style={{ width: "100%" }}
        />
        <div
          id="info2"
          className="container-fluid text-white bg-dark py-5 my-5"
        >
          <h2 className="mb-4 text-center">
            RadioNet: La cautivadora melodía que no podrás resistir...
          </h2>
        </div>
      </section>

      <section id="contacto" className="py-5">
        <div className="container px-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="logo bg-primary gradiente text-white rounded-3 mb-3">
                <h1>R</h1>
              </div>
              <h1 className="fw-bolder">Suscríbete</h1>
              <p className="lead fw-normal text-muted mb-0">
                ¡Disfruta de tu música!
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      {...register("name", {
                        required: "El nombre es obligatorio",
                        validate: validacionNombre,
                      })}
                      id="name"
                      type="text"
                      placeholder="Ingrese su nombre completo"
                      onBlur={() => {
                        trigger("name");
                      }}
                    />
                    <label htmlFor="name">Nombre Completo</label>
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                    {!errors.name && (
                      <div className="valid-feedback">El nombre es válido.</div>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      {...register("email", {
                        required: "El correo electrónico es obligatorio",
                        validate: validacionCorreo,
                      })}
                      id="email"
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      onBlur={() => {
                        trigger("email");
                      }}
                    />
                    <label htmlFor="email">Correo Electrónico:</label>
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                    {!errors.email && (
                      <div className="valid-feedback">
                        El correo electrónico es válido.
                      </div>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${
                        errors.telefono ? "is-invalid" : ""
                      }`}
                      {...register("telefono", {
                        required: "El número de teléfono es obligatorio.",
                        validate: validacionTelefono,
                      })}
                      id="telefono"
                      type="tel"
                      placeholder="Ingresa tu teléfono"
                      onBlur={() => {
                        trigger("telefono");
                      }}
                    />
                    <label htmlFor="telefono">Teléfono:</label>
                    {errors.telefono && (
                      <div className="invalid-feedback">
                        {errors.telefono.message}
                      </div>
                    )}
                    {!errors.telefono && (
                      <div className="valid-feedback">
                        El teléfono es válido.
                      </div>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="mensaje"
                      type="text"
                      placeholder="Ingrese su mensaje aquí..."
                      style={{ height: "10rem" }}
                    ></textarea>
                    <label htmlFor="mensaje">Mensaje:</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg"
                      id="submitButton"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    {isSubmitSuccessful && isDirty && (
                      <div className="text-success" id="submitSuccessMessage">
                        <div className="fw-bolder">
                          ¡Envío del formulario exitoso!
                        </div>
                      </div>
                    )}
                    {errors && Object.keys(errors).length > 0 && (
                      <div className="text-danger" id="submitErrorMessage">
                        <div>Error al enviar el mensaje.</div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white"
                href="https://www.instagram.com/ "
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white"
                href="https://www.tiktok.com/ "
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;
