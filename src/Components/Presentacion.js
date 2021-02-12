import React, { Component} from 'react';
import '../css/Presentacion.css'
import {Row,Container} from 'reactstrap';
  
class Presentacion extends Component {
    render() {
        return (
            <div className="mx-auto px-auto my-5 justify-content-center">
                <Container >
                    <Row  className="align-items-center">
                        <div className="justify-content-center align-middle col"> 
                            <h1 className="blanco">Hola, soy</h1>
                            <h1 className="blanco">Walter Santacruz</h1>
                            <h3 className="blanco-light">Estudiante politécnico</h3>
                            <p className="blanco-light">- FreeLancer - FullStack -</p>
                        </div>
                        <img className="rounded mx-auto d-block"alt="Walter" id="walter"src={process.env.PUBLIC_URL + '/Walter.jpg'}/>

                        
                    </Row>

                </Container>


            </div>
        );
    }
}

export default Presentacion;
