import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'animate.css';
import { Inicio } from './Inicio';

export function Testimonios() {
  return (
    <div>
        <Carousel fade className='testimonioscarrusel'>
            <Carousel.Item>
                <div className='equipoFono'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>
                    "Muy agradecido del apoyo y preocupación que tuvieron con mi hijo, 
                    lo ayudaron de manera muy significativa, muy recomendados."
                    </h5>
                        <br></br>
                    <br></br>
                </div>
                <Carousel.Caption>
                {/* <h2>Opcional</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='equipoKine'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>
                        "Muchas gracias por todo el apoyo, Camila es una gran fonoaudióloga y 
                        tiene mucha paciencia con mi hija."
                    </h5>
                        <br></br>
                    <br></br>
                </div>
                <Carousel.Caption>
                {/* <h2>Opcional</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='equipoTo'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>
                        "Absolutamente satisfecha, excelente trato y paciencia, 
                        esto hizo que mi experiencia fuera increible
                         y me dejaron completamente complacida con el servicio recibido."
                    </h5>
                        <br></br>
                    <br></br>
                </div>
                <Carousel.Caption>
                {/* <h2>Opcional</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='direccion'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>
                        "Han habido avances muy significativos con mi hija, súper notorios. 
                        Igual hay que continuar el trabajo, pero ya es un proceso que avanza 
                        más del 50%."
                    </h5>
                        <br></br>
                    <br></br>
                </div>
                <Carousel.Caption>
                {/* <h2>Opcional</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <hr/>
            <Inicio/>
    </div>
  );
}
