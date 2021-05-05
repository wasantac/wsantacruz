import React from "react";
import "../css/Presentacion.css";
import { Row, Container } from "reactstrap";
import LetraMovimiento from "./LetraMovimiento";
import { motion } from "framer-motion";

const Presentacion = () => {
    const text = {
        hidden: {opacity: 0, x:-50},
        visible: {
            opacity: 1, x: 0,
            transition:{
                delay: 1,
                duration: 0.5,
            }
        }
    }
    const image = {
        hidden : {
            opacity: 0,
            x: 50
        },
        visible:{
            opacity:1,
            x: 0,
            transition: {
                delay: 1,
                duration: 0.5
            }
        }

    }
    return (
        <div className="mx-auto px-auto my-5 justify-content-center">
        <Container>
            <Row className="align-items-center">
            <motion.div className="justify-content-center align-middle col-sm-6" initial="hidden" animate="visible" variants={text}>
                <h1 className="blanco">
                <LetraMovimiento texto="Hola, soy"></LetraMovimiento>
                </h1>
                <h1 className="blanco">
                <LetraMovimiento texto="Walter Santacruz"></LetraMovimiento>
                </h1>
                <h3 className="blanco-light">
                <LetraMovimiento texto="Estudiante politécnico"></LetraMovimiento>
                </h3>
                <p className="blanco-light">
                <LetraMovimiento texto="- FreeLancer - FullStack -"></LetraMovimiento>
                </p>
            </motion.div>
                <motion.img initial="hidden" animate="visible" variants={image}
                    className="rounded mx-auto d-block"
                    alt="Walter"
                    id="walter"
                    src={process.env.PUBLIC_URL + "/Walter.jpg"}
                />
            </Row>
        </Container>
        </div>
    );
};

export default Presentacion;
