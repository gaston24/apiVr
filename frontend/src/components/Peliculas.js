import React, {Component} from 'react';

import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component{
    render(){
        return(
            <div>

            <h4>Soy el componente de peliculas</h4>
            <MensajeEstatico />
            
            </div>
        );
    }
}

export default Peliculas;