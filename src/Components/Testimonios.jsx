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
            <Carousel.Item>
            <div className='equipoFono'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>
                    “Mi hijo no hablaba, solo emitía balbuceos, mientras que otros bebés de su edad ya habían comenzado a decir papá y mamá. Luego de buscar y pasar por algunos especialistas y evaluaciones logramos dar con Camila González. Ella, con mucha paciencia y amor logró conectar con mi hijo mediante juegos y nos ha dado el apoyo a nosotros, como papás, para ir fortaleciendo la emisión de palabras en la vida cotidiana. En la actualidad mi niño ya está armando frases. Creo que lo importante es hacerse cargo a tiempo, buscar la ayuda correcta y trabajar en conjunto.”
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
                    “Nosotros quedamos muy conformes con la terapia y contentos por los logros! Mirna fue muy amable y cariñosa con Rafael... logró encontrar la forma de llegar, siendo receptiva cuando no quería trabajar o estaba cansando.  De verdad recomiendo mucho a Mirna y su trabajo.“
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
