import React, { Component } from 'react'

// Componentes
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {
    render() {
        return (
            <div id='blog'>
                <Slider 
                    title='Blog' 
                    size='slider-small'
                />

                <div className="center">
                    <div id='content'>
                        {/* Listado de articulos que vienen del api rest de Node */}
                    </div>

                    <Sidebar
                        blog='true'
                    />
                </div>
            </div>
        )
    }
}

export default Blog;