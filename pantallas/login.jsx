import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../componentes/mapeo_actividad/componetizacion/button.jsx";
import Input from "../componentes/mapeo_actividad/componetizacion/input.jsx";

export default function Login (){
    const[usuario, setUsuario] = useState("");
    const[contrasena, setContrasena] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(usuario.trim() !== "" && contrasena.trim() !== ""){
            const datosUsuario = {
                nombre: usuario,
                contrasena: contrasena,
            };
            localStorage.setItem("usuario", JSON.stringify(datosUsuario));
            navigate ("/");
        }
        else {
            alert ("debe ingresar usuario y contrasena");
        }
    } 
    
    return(
        <div className="contenedor-login">
            <div className="contenedor-formulario-login">
                <h2 className="titulo-login">Iniciar Sesión</h2>
                <form className="formulario-login" onSubmit = {handleSubmit}>
                    <div className="grupo-formulario">
                        <label className="etiqueta-formulario" htmlFor="usuario">usuario</label>
                        <Input 
                            type="text" 
                            id="usuario"
                            name="usuario"
                            value={usuario} 
                            handleChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                    <div className="grupo-formulario">
                        <label className="etiqueta-formulario" htmlFor="contrasena">contrasena</label>
                        <Input
                            type = "password"
                            id = "contrasena"
                            name = "contrasena"
                            value= {contrasena}
                            handleChange = {(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <div className="acciones-formulario">
                        <Button boton="submit"></Button>
                    </div>
                </form>
                <div className="boton-volver">
                    <Button boton="volver" onClick={() => navigate('/')}></Button>
                </div>
            </div>
        </div>
    )
}