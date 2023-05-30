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
          {/* Resto del código */}
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          {/* Resto del código */}
        </div>
      </footer>
      <a className="scroll-to-top rounded" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
  );
}

export default App;
