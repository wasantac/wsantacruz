import React, { Component } from 'react';
import '../css/Pie.css'
import {Row,Col } from 'reactstrap';
import { FaFacebook,ImWhatsapp,SiFiverr,FiInstagram } from 'react-icons/all';
class Pie extends Component {
    render() {
        return (
            <div  className="pie container-fluid h-10 py-3 mt-auto">
                <Row className="align-items-center my-1">
                    <Col>
                        <h4>
                            <a href="https://www.facebook.com/skyshot12349"><FaFacebook /></a>
                            <a href="https://wa.me/+593983313553"><ImWhatsapp /></a>
                            <a href="https://www.fiverr.com/share/rxxW2N"><SiFiverr /></a>
                            <a href="https://www.instagram.com/walter12349/"><FiInstagram /></a>
                        </h4>
                        <p className="copyright"><a href="https://bgjar.com/" className="blanco copyright">Fondo proporcionado por: bgjar</a></p>
                    </Col>                    
                    
                </Row>
            </div>
        );
    }
}

export default Pie;
