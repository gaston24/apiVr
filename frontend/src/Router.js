import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>

                <Header />





                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />

                    <Route exact path="/pagina-1" render={
                        () => (
                            <React.Fragment>

                                <h1>Hoa mundo desde pagina 1</h1>
                                <MiComponente saludo="Hola amigo" />

                            </React.Fragment>
                        )
                    } />


                    <Route exact path="/pruebas/:id" render={(props) => {
                        var id = props.match.params.id;
                        return (
                            <React.Fragment>

                                <div id="content">
                                    <h1>prueba</h1>
                                    <h2>{id}</h2>

                                </div>
                            </React.Fragment>
                        );
                    }
                    } />


                    <Route component={Error} />

                </Switch>



                <div className="clearfix"></div>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;