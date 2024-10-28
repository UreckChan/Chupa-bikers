// Importa React para crear componentes
import React from 'react';

// Importa los componentes que se utilizarán en la página de inicio
import Header from '../components/Header'; // Componente para la cabecera de la página
import Visual from '../components/Visual'; // Componente para la sección visual
import Main from '../components/Main'; // Componente para el contenido principal
import Area from '../components/Area'; // Componente para una sección específica del área
import Reto from '../components/Reto'; // Componente para mostrar un reto
import Footer from '../components/Footer'; // Componente para el pie de página

// Define el componente Home, que representa la página principal
const Home = () => {
  return (
    // Envoltorio principal que contiene todos los componentes de la página
    <div id="wrapper">
      <Header/> {/* Muestra el componente de la cabecera */}
      <Visual/> {/* Muestra el componente visual */}
      <Main/> {/* Muestra el contenido principal */}
      <Area/> {/* Muestra la sección del área */}
      <Reto/> {/* Muestra la sección de retos */}
      <Footer/> {/* Muestra el pie de página */}
    </div>
  );
}

// Exporta el componente Home para poder utilizarlo en otras partes de la aplicación
export default Home;
