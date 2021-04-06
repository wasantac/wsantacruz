import React from 'react';
import { Jumbotron,Row,Col } from 'reactstrap';
import '../css/Portafolio.css'
const Portafolio = () => {
    return (
        <div className="mb-5">
            <Jumbotron className="bg-transparent p-4 m-0">
                <h1 className="display-3 text-white">Proyectos</h1>
                <p className="lead text-white">Aquí los proyectos en los que he trabajado.</p>
                <hr className="bg-danger" />
            </Jumbotron>
            
            <Row className="mx-1">
                <Col className="my-2 rounded proyecto" sm="4">
                    <img src="/assets/img/Waltmaysa.png" alt="Waltmaysa" className="img-fluid rounded "></img>
                </Col>
                <Col className="my-2 rounded proyecto" sm="4">
                    <img src="/assets/img/urbazapp.png" alt="Waltmaysa" className="img-fluid rounded "></img>
                </Col>
                <Col className="my-2 rounded proyecto" sm="4">
                    <img src="/assets/img/RussoStore.png" alt="Waltmaysa" className="img-fluid rounded "></img>
                </Col>            
            </Row>
            <Jumbotron className="bg-transparent p-4  mb-5">
                <hr className="my-2 bg-danger" />
                <p className="lead text-white mb-5">Ayúdame a llenar esta página con más proyectos!</p>
                <hr className="my-2 bg-danger" />
            </Jumbotron>
            
        </div>
    );
}

export default Portafolio;
