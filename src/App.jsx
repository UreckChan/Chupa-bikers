// App.js
import React from 'react'; // Importa React para poder usar JSX y crear componentes
import { Route, Routes} from "react-router-dom"; // Importa componentes necesarios para el enrutamiento
import Home from './pages/Home'; // Importa el componente de la página de inicio
import PageNotFound from './pages/PageNotFound'; // Importa el componente para la página de error 404 (Página no encontrada)
import Formulario from './pages/Formulario'; // Importa el componente del formulario

// Función principal de la aplicación que define las rutas
function App() {
  return (
    <>
      {/* Define las rutas que manejará la aplicación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para la página de registro (formulario) */}
        <Route path="/register" element={<Formulario />} />
        
        {/* Ruta para cualquier otra dirección no definida, mostrando la página de error 404 */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos
export default App;
