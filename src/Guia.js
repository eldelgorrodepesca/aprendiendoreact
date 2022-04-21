import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import SeccionPruebas from './components/SeccionPruebas'
import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas'
import Error from './components/Error';

class Guia extends Component {
    render() {
        return (
            <Router>
                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path='/' component={Peliculas} />
                    <Route exact path='/index.html' component={Peliculas} />
                    <Route path='/ruta-prueba' component={SeccionPruebas} />
                    <Route path='/segunda-ruta' component={MiComponente} />

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
            </Router>
        )
    }
}

export default Guia;