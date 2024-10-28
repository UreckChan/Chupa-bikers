// Importa React y useState para manejar el estado del formulario
import React, { useState } from "react";

// Importa componentes para la cabecera y pie de página
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importa un hook personalizado para enviar datos
import useEnviarDatos from "../hooks/useEnviarDatos";

// Componente funcional Formulario
const Formulario = () => {
  // Define el estado inicial del formulario con useState
  const [formData, setFormData] = useState({
    nombre: "",        // Campo para el nombre
    telefono: "",      // Campo para el teléfono
    edad: "",          // Campo para la edad
    direccion: "",     // Campo para la dirección
    sexo: "",          // Campo para el sexo
    tiposangre: "",    // Campo para el tipo de sangre
    kilometros: "",    // Campo para seleccionar los kilómetros
    estado: "",        // Campo para el estado
    foto: null,        // Campo para subir una fotografía
  });

  // Desestructura las funciones y valores del hook personalizado
  const { enviarDatos, isLoading, error } = useEnviarDatos();

  // Función que maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target; // Extrae el nombre, valor y archivos del evento
    setFormData({
      ...formData,               // Mantiene el estado anterior
      [name]: files ? files[0] : value, // Actualiza el campo, si es archivo guarda el archivo, si no guarda el valor
    });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();        // Previene la recarga de la página
    enviarDatos(formData);     // Llama a la función para enviar los datos
  };

  // Retorna el JSX del componente Formulario
  return (
    <>
      {/* Componente de la cabecera con el título "Formulario" */}
      <Header page="Formulario"/>

      <div id="wrapper">
        <section className="visual">
          {/* Imagen de fondo en la sección visual */}
          <img src="images/img-bg-01.jpg" alt="" className="bg-stretch" />

          {/* Contenedor del formulario */}
          <div className="formulario-container">
            {/* Formulario que se envía al hacer submit */}
            <form className="formulario" onSubmit={handleSubmit}>
              {/* Campo para el nombre */}
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej. Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo para el teléfono */}
              <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  pattern="[0-9]{10}"
                  placeholder="Ej. 1234567890"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo para la edad */}
              <div>
                <label htmlFor="edad">Edad:</label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  min="1"
                  max="120"
                  placeholder="Ej. 25"
                  value={formData.edad}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo para la dirección */}
              <div>
                <label htmlFor="direccion">Dirección:</label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  placeholder="Ej. Calle 123, Colonia"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo para seleccionar el sexo */}
              <div>
                <label htmlFor="sexo">Sexo:</label>
                <select
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Seleccionar</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Campo para el tipo de sangre */}
              <div>
                <label htmlFor="tiposangre">Tipo de Sangre:</label>
                <input
                  type="text"
                  id="tiposangre"
                  name="tiposangre"
                  placeholder="Ej. O+"
                  value={formData.tiposangre}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo para seleccionar los kilómetros */}
              <div>
                <label htmlFor="kilometros">Kilómetros:</label>
                <select
                  id="kilometros"
                  name="kilometros"
                  value={formData.kilometros}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Seleccionar</option>
                  <option value="15km">15 Kilómetros</option>
                  <option value="20km">20 Kilómetros</option>
                  <option value="50km">50 Kilómetros</option>
                </select>
              </div>

              {/* Campo para el estado */}
              <div>
                <label htmlFor="estado">Estado:</label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  placeholder="Ej. Aguascalientes"
                  value={formData.estado}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Campo para subir una fotografía */}
              <div>
                <label htmlFor="foto">Fotografía:</label>
                <input
                  type="file"
                  id="foto"
                  name="foto"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Botón para enviar el formulario */}
              <div>
                <button type="submit" className="btn btn-submit" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar"} {/* Muestra "Enviando..." si isLoading es true */}
                </button>
              </div>
            </form>

            {/* Muestra el error si existe */}
            {error && <p className="error">Error: {error}</p>}
          </div>
        </section>
      </div>
      
      {/* Componente del pie de página */}
      <Footer />
    </>
  );
};

export default Formulario;
