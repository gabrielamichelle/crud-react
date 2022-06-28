import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            empleados: []
        }
    }


    // url1= http://localhost/crud-react-backend/empleados/
    // url2= http://localhost/Proyectos/empleados/

    cargarDatos() {
        // Pedimos los datos al api
        fetch("http://localhost/Proyectos/empleados/")
            // Obtenemos la respuesta en formato JSON
            .then(respuesta => respuesta.json())
            // Imprimimos los datos del JSON en la consolo
            .then((datosRes) => {
                // console.log(datosRes);
                this.setState({ datosCargados: true, empleados: datosRes })
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.cargarDatos();
    }

    render() {

        const { datosCargados, empleados } = this.state

        if (!datosCargados) {
            return (<div>Cargando datos...</div>);
        } else {

            return (
                <div className="card">
                    <div className="card-header">
                    <Link to={"/crear"} className="btn btn-success">Agregar nuevo empleado</Link>
                    </div>
                    <div className="card-body">
                        <h4>Lista de empleados</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empleados.map(
                                    (empleado) => (
                                        <tr key={empleado.id}>
                                            <td scope="row">{empleado.id}</td>
                                            <td>{empleado.nombre}</td>
                                            <td>{empleado.correo}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="">
                                                    <Link to={"/editar"} className="btn btn-warning">Editar</Link>
                                                    <button type="button" className="btn btn-danger">Borrar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}

export default Listar;