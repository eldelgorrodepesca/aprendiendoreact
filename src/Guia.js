import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import SeccionPruebas from './components/SeccionPruebas'
import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas'

class Guia extends Component {
    render() {
        return (
            <Router>
                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Switch>
                    <Route exact path='/' component={Peliculas} />
                    <Route path='/ruta-prueba' component={SeccionPruebas} />
                    <Route path='/segunda-ruta' component={MiComponente} />
                </Switch>
            </Router>
        )
    }
}

export default Guia;