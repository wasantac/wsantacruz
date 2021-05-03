import React, { Component} from 'react';
import '../css/Presentacion.css'
import {Row,Container} from 'reactstrap';
import LetraMovimiento from './LetraMovimiento';
  
class Presentacion extends Component {
    render() {
        return (
            <div className="mx-auto px-auto my-5 justify-content-center">
                <Container >
                    <Row  className="align-items-center">
                        <div className="justify-content-center align-middle col"> 
                            <h1 className="blanco">
                                <LetraMovimiento texto="Hola, soy"></LetraMovimiento>
                            </h1>
                            <h1 className="blanco">
                                <LetraMovimiento texto="Walter Santacruz"></LetraMovimiento>
                            </h1>
                            <h3 className="blanco-light">
                                <LetraMovimiento texto="Estudiante politécnico"></LetraMovimiento>
                            </h3>
                            <p className="blanco-light">
                            <LetraMovimiento texto="- FreeLancer - FullStack -"></LetraMovimiento></p>
                        </div>
                        <img className="rounded mx-auto d-block"alt="Walter" id="walter"src={process.env.PUBLIC_URL + '/Walter.jpg'}/>

                        
                    </Row>

                </Container>


            </div>
        );
    }
}

export default Presentacion;
