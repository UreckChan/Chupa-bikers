import React from 'react';

const Valores = ({ titulo, subtitulo, estado, imagen }) => {
  return (
    <>
      {estado ? (
        <li>
          <div className="img-holder">
            <img src={imagen} width="85" alt="" />
          </div>

          <div className="text-holder">
            <h3>{titulo}</h3>
            <p>{subtitulo}</p>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default Valores;
