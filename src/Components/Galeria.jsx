import React from 'react';
import { Carousel } from 'react-bootstrap';
import foto2 from '../assets/galeria/foto2.jpg';
import foto3 from '../assets/galeria/foto3.jpg';
import foto4 from '../assets/carrusel/IMG_0434.jpg'
import foto5 from '../assets/carrusel/IMG_0458.jpg'
import foto6 from '../assets/carrusel/IMG_0507.jpg'
import foto7 from '../assets/carrusel/IMG_0593.jpg'
import foto8 from '../assets/carrusel/IMG_0609.jpg'
import foto9 from '../assets/carrusel/IMG_0623.jpg'
import foto10 from '../assets/carrusel/IMG_0653.jpg'
import foto11 from '../assets/carrusel/IMG_0658.jpg'
import foto12 from '../assets/carrusel/IMG_0670.jpg'
import foto13 from '../assets/carrusel/IMG_0679.jpg'
import foto14 from '../assets/carrusel/IMG_0736.jpg'
import foto15 from '../assets/carrusel/IMG_0742.jpg'
import foto16 from '../assets/carrusel/IMG_0813.jpg'
import foto17 from '../assets/carrusel/IMG_0822.jpg'
import foto18 from '../assets/carrusel/IMG_0825.jpg'
import foto19 from '../assets/carrusel/IMG_0832.jpg'
import foto20 from '../assets/carrusel/IMG_0835.jpg'
import foto21 from '../assets/carrusel/IMG_0850.jpg'
import foto22 from '../assets/carrusel/IMG_0865.jpg'
import foto23 from '../assets/carrusel/IMG_0877.jpg'

export function CarouselComponent() {
  const fotos = [foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, foto21, foto22, foto23];
  return (
    <div>
      <Carousel>
        {fotos.map((foto, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block img-fluid m-auto"
              src={foto}
              alt={`Imagen ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}