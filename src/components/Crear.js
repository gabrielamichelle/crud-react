import React from 'react';

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Crear empleados
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                          <label for="nombre" className="form-label">Nombre</label>
                          <input type="text" name="nombre" id="nombre" className="form-control" placeholder="Nombre" aria-describedby="helpId" />
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Footer
                </div>
            </div>
        );
    }
}

export default Crear;