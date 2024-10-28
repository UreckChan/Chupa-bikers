import React from 'react';

const Main = () => {
  return (
    <section className="main" style={{ backgroundColor: 'white' }}>
      <div className="container" >
        <div id="cta">
          <a href="retos.html" className="btn btn-primary rounded">Ir a retos</a>
          <p>Cada día es un desafío, cambia tu vida ahora.</p>
        </div>
        <div className="row" >
        <section id="acerca">
          <div className="text-box col-md-offset-1 col-md-10" >
            <h2>Acerca de</h2>
            <p>¡Te invitamos a ser parte de nuestro movimiento nacional de ciclistas!</p>
          </div>
        </section>
        </div>

      </div>
    </section>
  );
}

export default Main;
