import Carousel from 'react-bootstrap/Carousel';
import sesion2 from '../assets/galeria/foto2.jpg'
import sesion3 from '../assets/galeria/foto3.jpg'
import sesion4 from '../assets/galeria/foto4.jpg'

function sesionesCarrusel() {
  return (
    <Carousel>
    <Carousel.Item>
        <img src={sesion2} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion3} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion4} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default sesionesCarrusel;