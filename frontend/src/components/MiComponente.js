import React, {Component} from 'react';


class MiComponente extends Component{

    render(){

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['tomate', 'cebolla', 'queso'],
            calorias: 400
        };


        return (
            // <React.Fragment>
            <div className="componente">


            <h1>{receta.nombre}</h1>
            <h1>{receta.calorias}</h1>
            <h2>Hola soy MiComponenteeee</h2>
            <ol>
            {
                receta.ingredientes.map((ingrediente, i) =>{
                    return (
                        <li key={i}>
                            {ingrediente}
                        </li>
                    )
                })
            }
            </ol>
            </div>
            // </React.Fragment>
        );
    }

}

export default MiComponente;