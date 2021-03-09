import React, { useState } from 'react';
import '../css/sorpresa.css'
import {Row,Container,Col} from 'reactstrap';
const Sorpresa = () => {
    let [show,setShow] = useState(true);
    let audio = new Audio("2 UNLIMITED - Get Ready For This (Official Music Video).mp3");
    const colors = [
        'white',
        'black',
        'blue',
        'green',
        'pink',
        'red',
        'purple',
        'yellow',
        'gray',
        'lilac',
      ];
      const [value, setValue] = React.useState(0);

      React.useEffect(() => {
        setInterval(() => {
            setValue((v) => (v === 9 ? 0 : v + 1));
        }, 500);
      }, []);
    return (
        <div id="wrapper" style={show ? {backgroundColor:"transparent"}:{backgroundColor: colors[value]}}>
            {show ? <button className="sorpresa contacto mx-2 text-center blanco borde pulsar" onClick={e => {
                setShow(!show)
                audio.play();
            }}>Confía bb</button> : 
            <Container>
            <Row className="align-items-center justify-content-center">  
                <Col className="d-flex justify-content-center">
                <img src={process.env.PUBLIC_URL + '/cheems.png'} alt="cheems" width="auto" height="200px"
                className="cheemsPeque"></img>               
                </Col>  

                <Col className="d-flex justify-content-center">                
                <img src={process.env.PUBLIC_URL + '/cheems.png'} alt="cheems" width="auto" height="400px"
                className="cheems"></img>
                </Col>
                <Col className="d-flex justify-content-center">                
                <img src={process.env.PUBLIC_URL + '/cheems.png'} alt="cheems" width="auto" height="200px"
                className="cheemsPeque"></img>
                </Col>
            </Row>
            </Container>}
        </div>

    );
}

export default Sorpresa;
