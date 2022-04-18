import React, { Component } from "react";

class Peliculas extends Component {
    state = {
        peliculas: [
            { titulo: 'Pulp Fiction', image: '../assets/images/pelicula1.jpg' },
            { titulo: 'Gran Torino', image: '../assets/images/pelicula2.jpg' },
            { titulo: '1917', image: '../assets/images/pelicula3.jpg' }
        ],
        nombre: 'Jorge Carrillo'
    };

    render() {
        return (
            <div className="peliculas" id="content">
                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>

                {/* Componente pelicula */}
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <article className="article-item" id="article-template">
                                    <div className="image-wrap">
                                        <img src={pelicula.image} alt={pelicula.titulo} />
                                    </div>

                                    <h2>Articulo de prueba</h2>
                                    <span className="date"> Hace 5 minutos </span>
                                    <a href="article.html">Leer más</a>

                                    {/* Limpiar flotado */}
                                    <div className="clearfix"></div>
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;