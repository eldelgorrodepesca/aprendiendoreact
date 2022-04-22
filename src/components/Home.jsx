import React, { Component } from 'react'

// Componentes
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (
            <div id='home'>
                <Slider
                    title='Bienvenido al curso de React con @eldelgorrodepesca'
                    btn='Ir al Blog'
                    size='slider-big'
                />
                <div className="center">
                    <div id='content'>
                        <h1 className='subheader'>Últimos articulos</h1>
                    </div>
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default Home;