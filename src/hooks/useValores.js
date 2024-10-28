import { useEffect, useState } from "react";
import { obtenerValores } from "../services/conexion";

const useValores = () => {
    const [valores, setValores] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchValores = async () => {
            try{
            const data = await obtenerValores();

            if(data instanceof Error) throw new error(data.message);
            
                


            data!==null ? setValores(data) : setValores([]); // Cambia los valores si hay datos
            

            setLoading(false); // Cambia el estado cuando los datos están listos
            }
            catch(error){

                console.log(error);
                setLoading(false);
            }

        };
        fetchValores();
    }, []);



    return { valores, loading }; // Retornamos tanto los valores como el estado de carga
};

export default useValores;
