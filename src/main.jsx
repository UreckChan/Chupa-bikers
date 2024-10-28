// Importa los módulos necesarios de React y otras bibliotecas
import { StrictMode } from 'react'; // Activa comprobaciones adicionales y advertencias en modo estricto durante el desarrollo
import { createRoot } from 'react-dom/client'; // Crea un punto de entrada en el DOM para la aplicación React
import { BrowserRouter } from 'react-router-dom'; // Enrutador para manejar la navegación en la aplicación
import { ToastContainer } from 'react-toastify'; // Contenedor de notificaciones tipo "toast"
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos para las notificaciones
import App from './App.jsx'; // Componente principal de la aplicación

// Selecciona el elemento con id 'root' como punto de entrada para la aplicación
const app = createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del contenedor 'root'
app.render(
  <StrictMode> {/* Habilita el modo estricto de React para detectar errores potenciales */}
    <BrowserRouter> {/* Envuelve la aplicación en un enrutador para manejar las rutas */}
      <App /> {/* Renderiza el componente principal de la aplicación */}
    </BrowserRouter>
    {/* Renderiza el contenedor de notificaciones 'toast' en la esquina superior derecha */}
    <ToastContainer position="top-right" />
  </StrictMode>
);
