// Define los endpoints de la API que se utilizarán para las solicitudes
const API_ENDPOINT_RETOS = 'http://localhost:5000/obtenerRetos'; // Endpoint para obtener retos
const API_ENDPOINT_VALORES = 'http://localhost:5000/obtenerValores'; // Endpoint para obtener valores
const API_ENDPOINT_INFO_POST = 'http://localhost:5000/crearRegistro'; // Endpoint para crear un nuevo registro

// Función asíncrona para obtener el último reto disponible desde la API
export const obtenerRetos = async () => {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(API_ENDPOINT_RETOS);
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    // Obtiene el último elemento del array de datos
    let lastEl = data[data.length - 1];
    // Devuelve el último reto
    return lastEl;
  } catch (error) {
    // Muestra un mensaje de error en la consola si falla la solicitud
    console.log('Fetch error', error);
  }
}

// Función asíncrona para obtener los valores desde la API
export const obtenerValores = async () => {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(API_ENDPOINT_VALORES);

    if( response.ok )  return await response.json();
      else throw new error('Fallo al obtener valores');
    // Convierte la respuesta a formato JSON
   
  } catch (error) {
    // Muestra un mensaje de error en la consola si falla la solicitud
    console.log('Fetch error', error);
    return(error);
  }
}

// Función asíncrona para crear un nuevo registro enviando datos a la API
export const crearRegistro = async (data) => {
  try {
    // Realiza una solicitud POST para enviar los datos
    const response = await fetch(API_ENDPOINT_INFO_POST, {
      method: 'POST', // Método HTTP POST
      headers: {
        'Content-Type': 'application/json', // Indica que los datos enviados son de tipo JSON
      },
      // Convierte los datos a formato JSON y los envía en el cuerpo de la solicitud
      body: JSON.stringify(data),
    });
    // Convierte la respuesta a formato JSON
    const res = await response.json();
    // Devuelve la respuesta de la API
    return res;
  } catch (error) {
    // Muestra un mensaje de error en la consola si falla la solicitud
    console.log('Fetch error', error);
  }
}
