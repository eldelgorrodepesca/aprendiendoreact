import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

// Componentes
import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas'
import Formulario from './components/Formulario';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';

class Guia extends Component {
    render() {

        return (
            <Router>
                <Header />

                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/blog' component={Blog} />
                    <Route exact path='/formulario' component={Formulario} />
                    <Route exact path='/peliculas' component={Peliculas} />

                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo desde la ruta: PAGINA-1</h1>
                            <MiComponente saludo="Hola amigo" />
                        </React.Fragment>
                    )} />

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id='content'>
                                <h1 className='subheader'>Pagina de pruebas</h1>
                                <h2>
                                    {nombre && !apellidos &&
                                        <React.Fragment>
                                            {nombre}
                                        </React.Fragment>
                                    }
                                    {nombre && apellidos &&
                                        <React.Fragment>
                                            {nombre} {apellidos}
                                        </React.Fragment>
                                    }
                                </h2>
                            </div>
                        )
                    }} />

                    <Route component={Error} />
                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </Router >
        )
    }
}

export default Guia;