import React, { Component } from 'react';
import { Progress ,Row,Col,Container} from 'reactstrap';
import { FaReact,FaAngular,SiJavascript,SiJava,FaPython} from 'react-icons/all';
import '../css/Estadisticas.css'
class Estadisticas extends Component {
    render() {
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
                        <Row className="align-items-center">
                            <Col xs="1" className="align-self-center">
                               <FaReact className="mx-2 blanco icono" />
                            </Col>
                            <Col xs="11" className="align-self-center">            
                                <Progress color="danger" animated value="60">60%</Progress>
                            </Col>   
                        </Row>
                        <Row className="align-items-center">
                            <Col xs="1" className="align-self-center">
                               <FaAngular className="mx-2 blanco icono" />
                            </Col>
                            <Col xs="11" className="align-self-center">            
                                <Progress color="danger" animated value="30">30%</Progress>
                            </Col>   
                        </Row>
                        <Row className="align-items-center">
                            <Col xs="1" className="align-self-center">
                               <SiJavascript className="mx-2 blanco icono" />
                            </Col>
                            <Col xs="11" className="align-self-center">            
                                <Progress color="danger" animated value="80">80%</Progress>
                            </Col>   
                        </Row>
                        <Row className="align-items-center">
                            <Col xs="1" className="align-self-center">
                               <SiJava className="mx-2 blanco icono" ></SiJava>
                            </Col>
                            <Col xs="11" className="align-self-center">            
                                <Progress color="danger" animated value="75">75%</Progress>
                            </Col>   
                        </Row>
                        <Row className="align-items-center">
                            <Col xs="1" className="align-self-center">
                               <FaPython className="mx-2 blanco icono" />
                            </Col>
                            <Col xs="11" className="align-self-center">            
                                <Progress color="danger" animated value="85">85%</Progress>
                            </Col>   
                        </Row>
                 
                    </Col>

                </Row>
                
            </Container>
        );
    }
}

export default Estadisticas;
