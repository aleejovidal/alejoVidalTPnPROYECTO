import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./button";

export default function Barra() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    
    useEffect(() => {
        const datosUsuario = localStorage.getItem("usuario");
        if (datosUsuario) {
            setUsuario(JSON.parse(datosUsuario));
        }
    }, []);
    
    const barraDatos = () => {
        if (usuario) {
            return (
                <div className="seccion-usuario-navbar">
                    <div className="bienvenida-navbar">
                        <h2 className="titulo-navbar">bienvenido {usuario.nombre}</h2>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="botones-navbar">
                    <Button boton="login" onClick={() => navigate('/login')}></Button>
                    <Button boton="registro" onClick={() => navigate('/registro')}></Button>
                </div>
            )
        }
    };
    
    return ( 
        <div className="barra-navegacion">
            <div className="marca-navbar">
                <h2 className="logo-navbar" onClick={() => navigate("/")}>
                    Programacion Web
                </h2>
            </div>
            {barraDatos()}
        </div>
    )
}