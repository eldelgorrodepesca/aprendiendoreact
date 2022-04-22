import React, { Component } from "react";

class Sidebar extends Component {

    render() {
        return (
            <aside id="sidebar">
                {this.props.blog == 'true' &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>¿Quieres crear tu propio articulo?</h3>
                        <a href="" className="btn btn-success">Crear articulo</a>
                    </div>
                }

                <div id="search" className="sidebar-item">
                    <h3>Buscador de articulos</h3>
                    <p>Encuentra el articulo que estabas buscando</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;