// Importa useState de React para manejar estados locales
import { useState } from "react";

// Importa la función crearRegistro desde los servicios (ruta debe ser verificada)
import { crearRegistro } from "../services/conexion";

// Importa la función toast para mostrar notificaciones
import { toast } from "react-toastify";

// Hook personalizado para enviar datos
const useEnviarDatos = () => {
  // Estado para indicar si se está cargando el envío de datos
  const [isLoading, setIsLoading] = useState(false);
  
  // Estado para manejar errores en el envío
  const [error, setError] = useState(null);

  // Función asíncrona para enviar los datos
  const enviarDatos = async (data) => {
    setIsLoading(true);  // Inicia el estado de carga
    setError(null);      // Limpia cualquier error previo
    
    try {
      // Llama a la función crearRegistro para enviar los datos
      const res = await crearRegistro(data);

      // Muestra una notificación de éxito con el mensaje devuelto
      toast.success(res.message);

    } catch (error) {
      // Si ocurre un error, actualiza el estado con el mensaje de error
      setError(error.message);
    } finally {
      // Al final, establece isLoading en false, indicando que ya no está en proceso
      setIsLoading(false);
    }
  };

  // Retorna la función enviarDatos junto con los estados de carga y error
  return { enviarDatos, isLoading, error };
};

// Exporta el hook para ser utilizado en otros componentes
export default useEnviarDatos;
