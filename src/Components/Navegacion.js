import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import '../css/Landing.css'
const Navegacion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top negro">
      <Navbar color="transparent" light expand="md" className="navbar-dark px-0">
        <NavbarBrand href="/" className="blanco mr-auto mx-3"><img className="logo" alt="logo"src={process.env.PUBLIC_URL + '/logo.svg'}/></NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-3" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/"className="mx-2 blanco text-center borde"><span>Inicio</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portafolio" className="blanco mx-2 text-center borde"><span>Portafolio</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="blanco mx-2 text-center borde"><span>Sobre mí</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="contacto mx-2 text-center blanco borde pulsar" href="/contacto"><span>Contáctame</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegacion;
