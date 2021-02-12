import React, { Component } from 'react';
import Presentacion from './Presentacion'
import Estadisticas from './Estadisticas';
class Landing extends Component {
    render() {
        return (
            <div id="fuente">
                <Presentacion />
                <Estadisticas />
            </div>
        );
    }
}

export default Landing;
