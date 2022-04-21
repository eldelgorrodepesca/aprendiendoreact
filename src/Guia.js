import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

// Componentes
import SeccionPruebas from './components/SeccionPruebas'
import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas'
import Error from './components/Error';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';

class Guia extends Component {
    render() {

        return (
            <Router>
                <Header />

                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/ruta-prueba' component={SeccionPruebas} />
                    <Route exact path='/segunda-ruta' component={MiComponente} />

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