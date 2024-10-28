import { useState, useEffect } from 'react';
import { obtenerRetos } from '../services/conexion';

const useReto = () => {
  const [reto, setReto] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchReto = async () => {
      const data = await obtenerRetos();
      data!==null ? setReto(data) : setReto([]); // Cambia los valores si hay datos
            
      
      setLoading(false); // Cambiamos el estado a false cuando terminamos de cargar
    };
    fetchReto();
  }, []);




  return { reto, loading }; // Retornamos reto y estado de carga
};

export default useReto;
