import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import '../css/Estadisticas.css'
let Estadisticas =  () => {
    let lista = ["Python","Java","MYSQL","MongoDB","JavaScript","CSS","HTML","REACT","ExpressJS","MERN STACK"]
    return (
        <Container>
            <h1 className="blanco my-4">
                Experiencia
            </h1>
            <Row className="align-items-center">
                <Col lg="6" className="my-3">
                    <p id="experiencia"className="blanco-light h5 text-justify pr-5">
                        He trabajado con algunos lenguajes de programación empezando con python, siguiendo con Java y ahora trabajo en desarrollo de paginas web. Tengo también conocimientos en desarrollo de bases de datos por lo que pueden ser implementadas en los servicios que ofrezco. Por ahora no he trabajado en ninguna empresa ya que soy estudiante de ingeniería en computación de la espol pero hago servicios de freelancer en fiverr.
                    </p>
                </Col>
                <Col lg="6" className="fondo">
                    <h2 className="blanco">Lenguajes de Programación & Frameworks</h2>
                    <div className="d-flex flex-wrap align-items-center">
                        {lista.map((item) => {
                            return <p className="m-1 py-1 px-2 bg-danger text-white rounded shadow-sm" key={item}>{item}</p>
                        })}
                    </div>
             
                </Col>

            </Row>
            
        </Container>
    );
}

export default Estadisticas;
