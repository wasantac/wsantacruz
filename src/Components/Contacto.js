import React from 'react';
import { Button, Form, FormGroup, Label, Input,Container} from 'reactstrap';
import '../css/Contacto.css'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';
import {FaFacebook,ImWhatsapp,FiInstagram} from 'react-icons/all'
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_y186g2g', 'template_7ha59e8', e.target, 'user_pTLxySAThdUhCksIGYy0E')
      .then((result) => {
          swal("Correo enviado exitosamente")
      }, (error) => {
        swal("Error al enviar el correo.",{
            icon: "error",
        })
      });   
      e.target.reset();
}

let Contacto = () =>{
    return (
        <Container className="pb-5 mb-5">
            
            <Form className="formulario"  onSubmit={sendEmail}>
            <h1 className="text-white">Contacto</h1>
            <hr className="bg-danger"></hr>
                <FormGroup>
                    <Label for="nombre" className="blanco">Nombre:</Label>
                    <Input type="text" name="nombre" id="nombre" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="apellido" className="blanco">Apellido:</Label>
                    <Input type="text" name="apellido" id="apellido" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail" className="blanco">Correo Electronico: </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="abc@homtail.com" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="mensaje" className="blanco">Mensaje:</Label>
                    <Input type="textarea" name="mensaje" id="mensaje" required/>
                </FormGroup>
                <div className="d-flex justify-content-center">
                    <Button id="enviar" className="contacto">Enviar</Button>
                </div>
            </Form>

            <div className="formulario mb-5">
                <h1 className="text-white">Links de Contacto</h1>
                <hr className="bg-danger"></hr>
                <ul>
                    <li className="text-white d-flex align-items-center justify-content-center"><ImWhatsapp className="mx-2" />Whatsapp: <a href="https://wa.me/+593983313553" className="text-danger mx-2">+593983313553</a></li>
                    <li className="text-white d-flex align-items-center justify-content-center"><FaFacebook className="mx-2" />Facebook: <a href="https://www.facebook.com/skyshot12349" className="text-danger mx-2">Walter Santacruz</a></li>
                    <li className="text-white d-flex align-items-center justify-content-center"><FiInstagram className="mx-2"/>Instagram: <a href="https://www.instagram.com/walter12349/" className="text-danger mx-2">@walter12349</a></li>
                </ul>
            </div>
        </Container>
    );
}



export default Contacto;
