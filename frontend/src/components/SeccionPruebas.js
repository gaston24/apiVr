import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    contador = 0;

    /*
    constructor(props){
        super(props);
        this.state={
            contador: 0
        }
    }
    */

    state = {
        contador : 0
    };

    // USANDO METODO BIND AL LLAMAR A LA FUNCION
    
    // sumar(e){
        //     // this.contador = this.contador++;
        //     // this.state.contador = this.state.contador++;
        //     this.setState({
            //         contador: (this.contador++)
            //     });
            
            // }    
            

    // SIN USAR EL METODO BIND, SE USA FUNCION DE FLECHAS
    
    sumar = (e) => {
        this.setState({
            contador : (this.contador++)
        });
    }
    
    restar(e){
        this.setState({
            contador: (this.contador--)
        });
    }

    render() {
        return (


            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <p>Hola bienvenido</p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                
                
                <h2 className="subheader">Componentes</h2>



                <section className="componentes">


                    <MiComponente />
                    <MiComponente />


                </section>
                <h2 className="subheader">Estado</h2>

        <p>Contador: {this.state.contador}</p>

        <input type="button" value="sumar" onClick={this.sumar}/>
        <input type="button" value="restar" onClick={this.restar.bind(this)}/>


            </section>

        );
    }

}

export default SeccionPruebas;