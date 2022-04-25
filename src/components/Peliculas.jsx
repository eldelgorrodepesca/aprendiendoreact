import React, { Component } from "react";

// Componentes
import Slider from './Slider';
import Sidebar from './Sidebar';
import Pelicula from "./Pelicula";

class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        var random = Math.floor(Math.random() * 3);
        peliculas[random].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }

    // CICLOS DE VIDA DE LOS COMPONENTES
    componentWillMount() { // Monta el componente antes de cargar la pagina
        this.setState({
            peliculas: [
                { titulo: 'Pulp Fiction', image: '../assets/images/pelicula1.jpg' },
                { titulo: 'Gran Torino', image: '../assets/images/pelicula2.jpg' },
                { titulo: '1917', image: '../assets/images/pelicula3.jpg' }
            ],
            nombre: 'Jorge Carrillo',
            favorita: {},
        })
    }
    /*
        componentDidMount() { // Monta el componente despues de cargar la pagina
            alert('componentDidMount()')
        }
    
        componentWillUnmount() { // Desmonta el componente
            alert('componentWillUnmount()')
        }
    */

    favorita = (pelicula, indice) => {
        console.log('Favorita');
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        })
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        return (
            <React.Fragment>
                <Slider
                    title='Películas'
                    size='slider-small'
                />
                <div className="center">
                    <div className="peliculas" id="content">
                    <h2>Listado de películas</h2>
                        <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
                        <div>
                            <button onClick={this.cambiarTitulo}>
                                Cambiar titulo de una película aleatoria
                            </button>
                        </div>

                        {
                            this.state.favorita.titulo ? (
                                <p className="favorita" style={pStyle}>
                                    <strog>La pelicula favorita es: </strog>
                                    <span>{this.state.favorita.titulo}</span>
                                </p>
                            ) : (
                                <p>No tienen aun una pelicula favorita</p>
                            )

                        }


                        {/* Componente pelicula */}
                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}

                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                        blog='false'
                    />
                </div>
            </React.Fragment>


        );
    }
}

export default Peliculas;