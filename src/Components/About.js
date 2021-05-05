import React from "react";
import { Container, Col, Row, Table, Progress } from "reactstrap";
import "../css/About.css";
const About = () => {
  return (
    <Container id="contenedor">
      <Row className="align-items-top">
        <Col sm="6">
          <Table borderless className="tabla  w-100">
            <thead>
              <tr>
                <th id="titulo" colSpan="2">
                  Datos Personales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombres:</td>
                <td>Walter Alfredo</td>
              </tr>
              <tr>
                <td>Apellidos:</td>
                <td>Santacruz Astudillo</td>
              </tr>
              <tr>
                <td>Lugar y Fecha de Nacimiento:</td>
                <td>Guayaquil, 03 de Marzo de 1999</td>
              </tr>
              <tr>
                <td>Correos:</td>
                <td>wasantac12349@gmail.com waltersantacruz@hotmail.es</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col sm="6">
          <h1 className="blanco mt-3 mb-4">Un poquito sobre mi</h1>
          <p className="blanco-light text-justify">
            Soy una persona muy proactiva,muy divertido (Siempre Facha) y un
            gran líder cuando se lo requiere. Me gusta mucho la programación y
            ahora estoy emprendiendo nuevos retos desde que aprendí a programar
            en web framworks para hacer páginas web. Me gusta mucho el anime
            siendo mi favorito Jojo's Bizzarre Adventure y también me gusta
            armar cubos de rubik.
          </p>
        </Col>
        <Col sm="12">
          <h1 className="blanco mt-3 mb-4 subrayar">Estudios</h1>
        </Col>

        <Col sm="6">
          <h2 className="blanco">Colegio Americano de Guayaquil</h2>
          <p className="blanco-light text-justify">
            Culminé mis estudios de primaria y secundaria en el prestigioso
            Colegio Americano. Ahí aprendí mucho inglés el cual me ha ayudado
            mucho ya que obtuve un certificado de B2 del bachillerato
            internacional. Me gradué de Bachiller en Ciencias.
          </p>
        </Col>
        <Col sm="6">
          <h2 className="blanco">Espol</h2>
          <p className="blanco-light text-justify">
            Ahora estoy estudiando en una de las mejores universidades del pais
            que es la Escuela Superior Politécnica del Litoral. Estoy cursando
            la carrera de ingeniería en computación y ahora estoy en el 6to
            Semestre de la Carrera. También en esta universidad obtuve un
            certificado B2 de inglés de Cambridge.
          </p>
          <div className="text-center blanco my-3">
            Porcentaje de Avance Carrera
          </div>
          <Progress animated color="danger" value="68">
            68%
          </Progress>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
