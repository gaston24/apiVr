import React, { Component } from 'react';
import Peliculas from './Peliculas';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {


    render() {
        return (


            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <p>Hola bienvenido</p>

                <section className="componentes">

                    <Peliculas />
                    <MiComponente />


                </section>
            </section>

        );
    }

}

export default SeccionPruebas;