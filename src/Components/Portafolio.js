import React from 'react';
import { Jumbotron,Row,Col,Container } from 'reactstrap';
import '../css/Portafolio.css'
import {AnimateSharedLayout ,motion} from 'framer-motion';

const Portafolio = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1,
            delayChildren: 3,
            staggerChildren: 5
          }
        }
      }
        
      const item = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition:{
            delay: 2,
            duration: 1
          }
        }
        
      }
    return (
        <div className="mb-5">
            <Jumbotron className="bg-transparent p-4 m-0">
                <h1 className="display-3 text-white text-center">Proyectos</h1>
                <p className="lead text-white text-center">Aquí los proyectos en los que he trabajado.</p>
            </Jumbotron>
            <AnimateSharedLayout >

            
            <motion.div animate="visible" initial="hidden" variants={container}>   
                <Container className="fondoProyecto">
                    <Row className="mx-1 overflow-hidden">
                        <Col className="my-2 rounded proyecto" sm="6">
                            <motion.div animate="visible" initial="hidden" variants={item}>
                            <img src="https://baxpidan.sirv.com/portfolio/Waltmaysa.png" alt="Waltmaysa" className="img-fluid rounded "></img>
                            </motion.div>
                        </Col>
                        <Col className="my-2 rounded proyecto" sm="6">
                            <motion.div animate="visible" initial="hidden" variants={item}>
                            <img src="https://baxpidan.sirv.com/portfolio/urbazapp.png" alt="Waltmaysa" className="img-fluid rounded "></img>
                            </motion.div>
                        </Col>
                        <Col className="my-2 rounded proyecto" sm="6">
                            <motion.div animate="visible" initial="hidden" variants={item}>
                            <img src="https://baxpidan.sirv.com/portfolio/RussoStore.png" alt="Waltmaysa" className="img-fluid rounded "></img>
                            </motion.div>
                        </Col>            
                    </Row>
                </Container>
            </motion.div>
            </AnimateSharedLayout >
            <Jumbotron className="bg-transparent p-4 espaciado">
                <p className="lead text-white mb-5 text-center" >Ayúdame a llenar esta página con más proyectos!</p>
            </Jumbotron>
        </div>
    );
}

export default Portafolio;
