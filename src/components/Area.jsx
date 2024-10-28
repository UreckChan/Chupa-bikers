import React from 'react';
import useValores from '../hooks/useValores';
import Valores from './subcomponents/valores.jsx';

const Area = () => {
  const { valores: datas, loading } = useValores(); // Obtenemos los valores y el estado de carga

  if (loading) {
    return (
      <div className="loading-container">
        <img src="/images/cargando.gif" alt="Cargando..." /> {/* Imagen de carga */}
      </div>
    );
  }

  if (!datas || datas.length === 0) {
    return <p>No hay datos disponibles</p>; // Manejo en caso de que no haya datos
  }

  return (
    <section className="area">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ul className="visual-list">
              {datas.map((data) => (
                <Valores 
                  key={data.id}
                  titulo={data.titulo} 
                  subtitulo={data.subtitulo} 
                  estado={data.estado} 
                  imagen={data.imagen} 
                />
              ))}
            </ul>
          </div>
          <div className="col-md-7">
            <div className="slide-holder">
              <div className="img-slide scroll-trigger">
                <img src="/images/img-01.jpg" height="400" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Area;
