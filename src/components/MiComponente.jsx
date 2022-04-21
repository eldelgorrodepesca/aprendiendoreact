import React, { Component } from "react";

class MiComponente extends Component {

    render() {
        let receta = {
            nombre: 'Pizza Prosciutto',
            ingredientes: ['Tomate', 'Queso', 'Jamon Cocido'],
            calorias: 400 + 'kcal'
        }

        return (
            <div className="mi-componente">
                <h1>{'Producto: ' + receta.nombre}</h1>
                <h2>{'Valor nutricional: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr />

                {this.props.saludo &&
                    <React.Fragment>
                        <h1>Desde una Prop: </h1>
                        <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default MiComponente;