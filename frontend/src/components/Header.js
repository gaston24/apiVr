import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <div classNameName="center">

                <div id="logo">
                    <img src={logo} classNameName="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Curso</strong>React
                    </span>
                </div>

                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/segunda-ruta" activeClassName="active">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pagina-1" activeClassName="active">Pagina 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pruebas/gaston" activeClassName="active">Pagina 2</NavLink>
                        </li>
                    </ul>
                </nav>



            </div>


        );
    }
}

export default Header;