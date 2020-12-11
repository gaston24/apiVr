import React, { Component } from 'react';

import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Batman vs superman', imagen: 'https://i.pinimg.com/originals/08/cb/c3/08cbc3566f6ed36c05811c668113ad6e.jpg' },
            { titulo: 'Gran Torino', imagen: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg' },
            { titulo: 'Looper', imagen: 'https://filmschoolrejects.com/wp-content/uploads/2019/07/looper-1280x720.jpg' },
        ],
        nombre: 'Gaston Marcilio'
    };

    cambiarTitulo = () => {


        var {peliculas} = this.state;
        var random = Math.floor(Math.random() * 3);

        peliculas[random].titulo = 'Batman begins';

        this.setState({
            peliculas: peliculas
        })
    }


    render() {
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>

                <p>
                    <button onClick={this.cambiarTitulo}>
                        Boton
                    </button>
                </p>

                {/* Componente de peliculas */}
                <div className="articules-item" id="articles">

                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (

                                <Pelicula key={i} pelicula={pelicula}/>

                                
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default Peliculas;