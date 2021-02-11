import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (

            <div id="home">


                <Slider
                    title="Bienvenidos de nuevo"
                    btn="Ir al blog"
                    size="slider-big"
                />

                <div className="center">

                    <div id="content">
                        <h1 class="subheader">Ultimos no se que</h1>
                    </div>

                    <Sidebar />

                </div>

            </div>
        )
    }
}

export default Home;