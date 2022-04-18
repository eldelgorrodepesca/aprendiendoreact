import React, { Component } from "react";
import MiComponente from "./MiComponente";

class SeccionPruebas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }

    contador = 0;

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        var nombre = 'Jorge Carrillo';
        return (
            <section id='content'>
                <h2 className="subheader">Ultimos articulos</h2>
                <p>
                    Hola a todos y bienvenidos!
                </p>

                <h2 className="subheader">Componentes</h2>
                <section className='componentes'>
                    <MiComponente />
                </section>

                <h2 className="subheader">Estados</h2>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" value='Sumar' onClick={this.sumar} />
                    <input type="button" value='Restar' onClick={this.restar} />
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;