import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../componentes/mapeo_actividad/componetizacion/button.jsx";
import Input from "../componentes/mapeo_actividad/componetizacion/input.jsx";

export default function Registro(){
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [edad, setEdad] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(usuario.trim() !== "" && email.trim() !== "" && contrasena.trim() !== ""){
            const datosUsuario = {
                nombre: usuario,
                email: email,
                contrasena: contrasena,
                edad: edad || null,
            };
            localStorage.setItem("usuario", JSON.stringify(datosUsuario));
            navigate("/");
        }
        else{
            alert("llene los campos");
        }
    }
    
    return (
        <div className="contenedor-registro">
            <div className="contenedor-formulario-registro">
                <h2 className="titulo-registro">Registro</h2>
                <form className="formulario-registro" onSubmit={handleSubmit}>
                    <div className="grupo-formulario">
                        <label className="etiqueta-formulario">Usuario:</label>
                        <Input 
                            type="text" 
                            id="usuario"
                            name="usuario"
                            value={usuario} 
                            handleChange={(e) => setUsuario(e.target.value)}
                        /> 
                    </div>
                    <div className="grupo-formulario">
                        <label className="etiqueta-formulario">Email:</label>
                        <Input 
                            type="email" 
                            id="email"
                            name="email"
                            value={email} 
                            handleChange={(e) => setEmail(e.target.value)}
                        /> 
                    </div>
                    <div className="grupo-formulario">
                        <label className="etiqueta-formulario">Contraseña:</label>
                        <Input 
                            type="password" 
                            id="contrasena"
                            name="contrasena"
                            value={contrasena} 
                            handleChange={(e) => setContrasena(e.target.value)}
                        /> 
                    </div>
                    <div className="grupo-formulario">
                        <label className="etiqueta-formulario">Edad (opcional):</label>
                        <Input 
                            type="number" 
                            id="edad"
                            name="edad"
                            value={edad} 
                            handleChange={(e) => setEdad(e.target.value)}
                        /> 
                    </div>
                    <div className="acciones-formulario">
                        <Button boton="Registrarse"></Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
