import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import '../css/Estadisticas.css'
import LetraMovimiento from './LetraMovimiento';
let Estadisticas =  () => {
    let lista = ["Python","Java","MYSQL","MongoDB","JavaScript","CSS","HTML","REACT.JS","Express.JS","MERN STACK","Angular CLI","SCSS"]
    let texto = "He trabajado con algunos lenguajes de programación como python y Java realizando proyectos sencillos en consola o interfaz gráfica. Tengo también conocimientos en desarrollo de bases de datos por lo que pueden ser implementadas en los servicios que ofrezco. Por otra parte mi experiencia se centra más en el desarrollo de sitios web (Aproximadamente 1 año) utlizando frameworks como react o angular. Para estos sitios me gusta utilizar plantillas de bootstrap combinandola con mis propios estilos en css o scss para darle una mejor presentación."
    return (
        <Container>
            <h1 className="blanco my-4">
                <LetraMovimiento texto="Experiencia"></LetraMovimiento>
            </h1>
            <Row className="align-items-center">
                <Col lg="6" className="my-3">
                    <p id="experiencia"className="blanco-light h5 text-justify pr-5">
                        <LetraMovimiento texto={texto}></LetraMovimiento>

                    </p>
                </Col>
                <Col lg="6" className="fondo">
                    <h2 className="blanco">
                        <LetraMovimiento texto="Conocimientos Sobre:"></LetraMovimiento>
                    </h2>
                    <div className="d-flex flex-wrap align-items-center">
                        {lista.map((item,key) => {
                            return <p className="m-1 py-1 px-2 bg-danger text-white rounded shadow-sm agrandar" key={`estadisticas${key}`}>{item}</p>
                        })}
                    </div>
             
                </Col>

            </Row>
            
        </Container>
    );
}

export default Estadisticas;
