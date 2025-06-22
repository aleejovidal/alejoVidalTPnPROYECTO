import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../componentes/mapeo_actividad/componetizacion/button.jsx";

export default function Inicio(){
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    
    useEffect(() => {
        const datosUsuario = localStorage.getItem("usuario");
        if (datosUsuario) {
            setUsuario(JSON.parse(datosUsuario));
        }
    }, []);
    
    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        setUsuario(null);
    };
    
    const mostrarDatos = () => {
        if (usuario) {
            return (
                <div className="datos-usuario">
                    <div className="informacion-usuario">
                        <h2 className="titulo-bienvenida">bienvenido</h2>
                        <p className="nombre-usuario">usuario : {usuario.nombre} </p>
                        {usuario.edad && <p className="edad-usuario">edad: {usuario.edad}</p>}
                        {usuario.email && <p className="email-usuario">email: {usuario.email}</p>}
                    </div>
                    <div className="acciones-usuario">
                        <Button boton="cerrar sesión" onClick={cerrarSesion}></Button>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="seccion-bienvenida">
                    <h2 className="titulo-bienvenida">ingrese sus datos</h2>
                    <div className="botones-bienvenida">
                        <Button boton="login" onClick={() => navigate('/login')}></Button>
                        <Button boton="registro" onClick={() => navigate('/registro')}></Button>
                    </div>
                </div>
            )
        }
    };
    
    return ( 
        <div className="contenedor-inicio">
            {mostrarDatos()}
        </div>
    )
}
