import React from 'react';
import { Jumbotron,Row,Col,Container } from 'reactstrap';
import '../css/Portafolio.css'
import {motion} from 'framer-motion';

const Portafolio = () => {
    const fotos = [
      {
        url : "https://russostore.netlify.app/",
        img : "https://baxpidan.sirv.com/portfolio/RussoStore.png",

      },
      {
        url : "http://urbazapp-app.ing-soft2021.com/",
        img : "https://baxpidan.sirv.com/portfolio/urbazapp.png",
      },
      {
        url: "https://593timer.netlify.app/",
        img: "https://baxpidan.sirv.com/portfolio/593timer.png" ,
      }
      ,{
        url : "https://porfiapp.netlify.app/",
        img : "https://baxpidan.sirv.com/portfolio/porfiapp.png"
      },{
        url: "https://marcador593.netlify.app/",
        img : "https://baxpidan.sirv.com/portfolio/realtime.png",
      }
    ]

    const container = {
        hidden: { opacity: 1, scale: 0,
          transition: {
            staggerChildren: 0.3
          } 
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            when: 'beforeChildren',
            delay: 1,
            staggerChildren: 1
          }
        }
      }
        
      const itemMov = {
        hidden: {y:25, opacity: 0 },
        visible: i=> ({
          opacity: 1,
          y: 0,
          transition:{
            delay: 0.3 * i,
            duration: 0.3,
          }
        })
        
      }
              
    return (
        <div className="mb-5">
            <Jumbotron className="bg-transparent p-4 m-0">
                <h1 className="display-3 text-white text-center">Proyectos</h1>
                <p className="lead text-white text-center">Aquí los proyectos en los que he trabajado.</p>
            </Jumbotron>  
            <motion.div animate="visible" initial="hidden" variants={container}>   
                <Container className="fondoProyecto">
                    <Row className="mx-1 overflow-hidden">
                        {
                        fotos.map((item,i)=>{ 
                          return(
                            <Col className="my-2 rounded proyecto" sm="6" key={i}>
                            <a href={item.url}>
                            <motion.img  custom={i} variants={itemMov} src={item.img} alt="proyecto" className="img-fluid rounded "></motion.img>
                            </a>
                            </Col>
                          );
                        })                        
                        }         
                    </Row>
                </Container>
            </motion.div>
            <Jumbotron className="bg-transparent p-4 espaciado">
                <p className="lead text-white mb-5 text-center" >Ayúdame a llenar esta página con más proyectos!</p>
            </Jumbotron>

        </div>
    );
}

export default Portafolio;
