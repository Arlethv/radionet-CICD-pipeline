import React from 'react';
import RadioNetImage from './assets/img/RadioNet.svg';
import escuchandoMusica from './assets/img/escuchando-musica.svg';

import './App.css';

function App() {
  return (
    <div>
      <header className="masthead d-flex align-items-center" style={{ backgroundImage: `url(${RadioNetImage})` }}>
        <div className="container px-4 px-lg-5 text-center">
          <h1 className="mb-1">RadioNet</h1>
          <h3 className="mb-5"><em>Conéctate con la música que te mueve</em></h3>
          <a className="btn btn-primary btn-xl">Escucha ahora</a>
        </div>
      </header>
      <section className="content-section bg-light" id="about">
        <div className="container px-4 px-lg-5 text-center">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-10">
              <h2>RadioNet!</h2>
              <p className="lead mb-5"></p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src={escuchandoMusica} alt="Descripción de la imagen" style={{ width: '100%' }} />
      </section>
      <section className="content-section bg-primary text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">RadioNet: La cautivadora melodía que no podrás resistir...</h2>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <h1>R</h1>
              </div>
              <h1 className="fw-bolder">Suscribete</h1>
              <p className="lead fw-normal text-muted mb-0">Disfruta de tu musica!</p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    <label htmlFor="name">Nombre Completo</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                    <label htmlFor="email">Email</label>
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                    <label htmlFor="phone">Numero de Telefono</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required"></textarea>
                    <label htmlFor="message">Mensaje</label>
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button>
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
            <a className="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/">
      </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-twitter" ></i></a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="#!"><i className="icon-social-github"></i></a>
            </li>
          </ul>
        </div>
      </footer>
      <a className="scroll-to-top rounded" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
  );
}

export default App;
