import React, { Component } from 'react';

import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Batman vs superman', imagen: 'https://i.pinimg.com/originals/08/cb/c3/08cbc3566f6ed36c05811c668113ad6e.jpg' },
            { titulo: 'Gran Torino', imagen: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg' },
            { titulo: 'Looper', imagen: 'https://filmschoolrejects.com/wp-content/uploads/2019/07/looper-1280x720.jpg' },
        ],
        nombre: 'Gaston Marcilio',
        favorita: {},
        indice: ''
    };

    cambiarTitulo = () => {


        var { peliculas } = this.state;
        // var random = Math.floor(Math.random() * 3);

        peliculas[0].titulo = 'Batman begins';

        this.setState({
            peliculas: peliculas,

        })
    }


    favorita = (pelicula, indiceMarcado) => {
        console.log(pelicula);
        this.setState({
            favorita: pelicula,
            indice: indiceMarcado
        })
    }

    // antes de que se cargue todo

    componentWillMount() {
        // alert("se va a montar el componente")

    }

    // despues de que se cargue

    componentDidMount() {
        // alert("se acaba de cargar el componente")
    }

    componentWillUnmount() {

    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };



        return (

            <React.Fragment>

            

            <Slider
                    
                    size="slider-small"
                />

            <div className="center">


                <div id="content" className="peliculas">

                    <h2 className="subheader">Peliculas</h2>
                    <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>

                    <p>
                        <button onClick={this.cambiarTitulo}>
                            Cambia titulo Batman
                    </button>
                    </p>

                    {
                        this.state.favorita.titulo ? (
                            <p className="favorita" style={pStyle}>

                                <p>
                                    <strong>La pelicula favorita es: </strong>
                                    <span>{this.state.favorita.titulo}</span>
                                    <br />
                                    <span>{this.state.indice + 1}</span>
                                </p>

                            </p>
                        ) : (
                                <p>Falso</p>
                            )
                    }


                    {/* Componente de peliculas */}
                    <div className="articules-item" id="articles">

                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (

                                    <Pelicula
                                        key={i}
                                        pelicula={pelicula}
                                        indice={i}
                                        marcarFavorita={this.favorita}
                                    />


                                )
                            })
                        }

                    </div>

                </div>

                <Sidebar 
                    blog="true"
                    
                    />

            </div>

            </React.Fragment>
        );
    }
}

export default Peliculas;