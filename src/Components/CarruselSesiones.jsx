import Carousel from 'react-bootstrap/Carousel';
import sesion1 from '../assets/galeria/foto1.png'
import sesion2 from '../assets/galeria/foto2.png'
import sesion3 from '../assets/galeria/foto3.png'
import sesion4 from '../assets/galeria/foto4.png'
import sesion5 from '../assets/galeria/foto5.png'
import sesion6 from '../assets/galeria/foto6.png'
import sesion7 from '../assets/galeria/foto7.png'
import sesion8 from '../assets/galeria/foto8.png'
import sesion9 from '../assets/galeria/foto9.png'
import sesion10 from '../assets/galeria/foto10.png'
import sesion11 from '../assets/galeria/foto11.png'


function sesionesCarrusel() {
  return (
    <Carousel>
    <Carousel.Item>
        <img src={sesion1} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
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
    <Carousel.Item>
        <img src={sesion5} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion6} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion7} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion8} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion9} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion10} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img src={sesion11} className='img-fluid w-auto '></img>
        <Carousel.Caption>
        {/* <h2>Opcional</h2> */}
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  );
}

export default sesionesCarrusel;