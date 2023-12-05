import Carousel from 'react-bootstrap/Carousel';
import sesion5 from '../assets/galeria/IMG_0444.jpg'
import sesion6 from '../assets/galeria/IMG_0491.jpg'
import sesion7 from '../assets/galeria/IMG_0588.jpg'
import sesion8 from '../assets/galeria/IMG_0611.jpg'
import sesion9 from '../assets/galeria/IMG_0615.jpg'
import sesion10 from '../assets/galeria/IMG_0655.jpg'
import sesion11 from '../assets/galeria/IMG_0667.jpg'
import sesion12 from '../assets/galeria/IMG_0787.jpg'
import sesion13 from '../assets/galeria/IMG_0864.jpg'
import sesion14 from '../assets/galeria/IMG_0892.jpg'

const imagenes = [sesion5, sesion6, sesion7, sesion8, sesion9, sesion10, sesion11, sesion12, sesion13, sesion14];

function sesionesCarrusel() {
  return (
    <Carousel>
      {imagenes.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} className='img-fluid w-auto' alt={`Imagen ${index + 1}`} />
          <Carousel.Caption>{/* Puedes agregar contenido de la leyenda aquí */}</Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default sesionesCarrusel;