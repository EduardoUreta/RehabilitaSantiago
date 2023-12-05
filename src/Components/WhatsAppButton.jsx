import React from 'react';
import logowsp from '../assets/footer/icons8-whatsapp.svg'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/56948538803`;
  };
  

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img src={logowsp} alt="LogoWSP" className='img-fluid' />
    </div>
  );
};

export default WhatsAppButton;
