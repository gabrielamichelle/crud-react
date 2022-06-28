import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Redirect } from "react-router-dom";

class Crear extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: ""
        }
    }

    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
    }

    

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado...");
        const { nombre, correo } = this.state;
        console.log(`Nombre: ${nombre} y Correo: ${correo}`);

        // Insertando datos en la API
        let datosEnviar = {nombre: nombre, correo: correo};
        fetch("http://localhost/Proyectos/empleados/?insertar=1", {
            method: "POST",
            body: JSON.stringify(datosEnviar)
        })
            .then(respuesta => respuesta.json())
            .then((datosRes) => {
                console.log(datosRes);
                // <Navigate to="/" replace={true} />
                // <Redirect push to="/" />
                // this.props.history.push("/");
                <Link to={"/"} />
            })
            .catch(console.log)
    }

    render() {
        const { nombre, correo } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    Crear empleados
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" name="nombre" id="nombre" value={nombre} onChange={this.cambioValor} className="form-control" placeholder="Nombre" aria-describedby="helpId" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <input type="email" name="correo" id="correo" value={correo} onChange={this.cambioValor} className="form-control" placeholder="Correo" aria-describedby="helpId" />
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar nuevo empleado</button>
                            <Link to={"/"} className="btn btn-default">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Crear;
