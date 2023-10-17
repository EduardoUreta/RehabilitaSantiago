import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import rehabLogo from '../assets/Recurso9.svg';
import '../Styles/NavBar.css'

import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <Navbar expand="lg" className="color-bg">
        <Container className="d-flex align-items-center">
          <div className="d-flex align-items-center ml-1">
            <img width="128" height="64" src={rehabLogo} alt="logo" />
            <Navbar.Brand className='text-warning ml-3'> </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
              <NavLink to="/" className='nav-link text-black text-center mr-2'>Inicio</NavLink>
              <NavLink to="/nosotros" className='nav-link text-black text-center mr-2'>Nosotros</NavLink>
              <NavLink to="/servicios" className='nav-link text-black text-center mr-2'>Servicios</NavLink>
              <NavLink to="/equipo" className='nav-link text-black text-center mr-2'>Equipo</NavLink>
              <NavLink to="/contacto" className='nav-link text-black text-center mr-2'>Reserva y Contacto</NavLink>
              <NavLink to="/faqs" className='nav-link text-black text-center mr-2'>Preguntas Frecuentes</NavLink>
              <NavLink to="/blog-y-recursos" className='nav-link text-black text-center mr-2'>Blog y Recursos</NavLink>
              <NavLink to="/galeria" className='nav-link text-black text-center mr-2'>Galeria</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;