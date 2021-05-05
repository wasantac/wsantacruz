import React, { useState } from 'react';
import '../css/sorpresa.css'
import {Row,Container,Col} from 'reactstrap';

const Sorpresa = () => {
  
    let [show,setShow] = useState(true);
    let [color,setColor] = useState("white");
    let [colorTwo,setColorTwo] = useState("white");
    let audio = new Audio("2 UNLIMITED - Get Ready For This (Official Music Video).mp3");

      let getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      

      React.useEffect(() => {
        setInterval(() => {
            setColor(getRandomColor());
            setColorTwo(getRandomColor());
        }, 500);
      }, []);
    return (
        
        <div id="wrapper" style={show ? {backgroundColor:"transparent"}:{backgroundColor: color,borderColor: colorTwo,borderWidth: 25} }>
            {show ? <button className="sorpresa contacto mx-2 text-center blanco borde pulsar" onClick={e => {
                setShow(!show)
                audio.play();
            }}>Confía bb</button> : 
            <Container className="aparecer m-5">
            
            <Row className="align-items-center justify-content-center">  
                <Col className="d-flex justify-content-center">
                <img src="https://baxpidan.sirv.com/portfolio/Daco_4062401%20(1)%20(1).png" alt="cheems" width="auto" height="200px"
                className="cheemsPeque"></img>               
                </Col>  

                <Col className="d-flex justify-content-center">                
                <img src="https://baxpidan.sirv.com/portfolio/Daco_4062401%20(1)%20(1).png" alt="cheems" width="auto" height="400px"
                className="cheems"></img>
                </Col>
                <Col className="d-flex justify-content-center">                
                <img src="https://baxpidan.sirv.com/portfolio/Daco_4062401%20(1)%20(1).png" alt="cheems" width="auto" height="200px"
                className="cheemsPeque"></img>
                </Col>
            </Row>
            </Container>}
        </div>

    );
}

export default Sorpresa;
