import React from 'react';
import useReto from '../hooks/useReto'; // Importa el hook personalizado

const Reto = () => {
  const { reto, loading } = useReto(); // Obtenemos reto y estado de carga

  if (loading) {
    return (
      <section className="visual-container" id="reto">
        <div className="loading-container">
          <img src="/images/cargando.gif" alt="Cargando..." /> {/* Imagen de carga */}
        </div>
      </section>
    );
  }

  return (
    <section className="visual-container" id="reto">
      <div className="area">
        <div className="visual-area">
          <div className="container">
            <h2>Retos con causa</h2>
            <div>
              {reto ? (
                <div className="row-retos">
                  <div className="image-container">
                    <img src={reto.poster || "/images/retosimg.png"} alt={reto.reto || "Reto"} style={{width:'70%'}} />
                  </div>
                  <div className="info-container">
                    <h2 className="info-container">{reto.reto || "Reto"}</h2>
                    <h3 className="info-container">{reto.lugar || "Lugar"}</h3>
                    <p className="info-container">{reto.descripcion || "Descripcion"}</p>
                  </div>
                </div>
              ) : (
                <p>No hay datos disponibles</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reto;
