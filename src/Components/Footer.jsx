import React from 'react';
import '../Styles/Footer.css'; 
import logo from '../assets/Recurso1.svg'
import logoig from '../assets/footer/icons8-instagram.svg'
import logowsp from '../assets/footer/icons8-whatsapp.svg'
import logogmail from '../assets/footer/icons8-gmail.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo Rehab Stgo"/>
        </div>
        <div className="col-md-4 col-sm-6">
            <h5 className='text-center color-encuentranos'>ENCUÉNTRANOS</h5>
            <a href="https://www.instagram.com/rehabilitasantiago/" target='_blank'>
                <img src={logoig} alt="LogoIG" className='img-fluid' />
            </a>
            <a href="https://api.whatsapp.com/send?phone=56948538803" target='_blank'>
                <img src={logowsp} alt="LogoWSP" className='img-fluid' />
            </a>    
            <a href="mailto:contactofonoaudiologiasantiago@gmail.com" target='_blank'>
                <img src={logogmail} alt="LogoGMAIL" className='img-fluid' />
            </a> 
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-info text-black">
        <p> Centro Rehabilita Santiago ~ Teléfonos: +56948538803 y +56973898844 ~ contactofonoaudiologiasantiago@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
