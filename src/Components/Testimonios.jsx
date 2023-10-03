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
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>"Mi experiencia con 'Rehabilita Santiago' ha sido 
                        increíble. Desde que mi hija comenzó la terapia de fonoaudiología, 
                        he notado una mejora significativa en la capacidad para 
                        comunicarse. El equipo de fonoaudiólogos es altamente 
                        profesional y comprensivo. Han trabajado con mi hijo de manera 
                        personalizada, y gracias a su dedicación, he mejorado su
                        confianza al hablar y expresarse. Estoy realmente 
                        agradecida por el apoyo que hemos recibido aquí."</h5>
                        <br></br>
                    <h6 className='text-end m-3 animate__animated animate__fadeInDownBig'> Francisca P, mamá de Amanda </h6>
                    <br></br>
                </div>
                <Carousel.Caption>
                {/* <h2>Opcional</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='equipoKine'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>"Mi experiencia con 'Rehabilita Santiago' ha sido 
                        increíble. Desde que mi hija comenzó la terapia de fonoaudiología, 
                        he notado una mejora significativa en la capacidad para 
                        comunicarse. El equipo de fonoaudiólogos es altamente 
                        profesional y comprensivo. Han trabajado con mi hijo de manera 
                        personalizada, y gracias a su dedicación, he mejorado su
                        confianza al hablar y expresarse. Estoy realmente 
                        agradecida por el apoyo que hemos recibido aquí."</h5>
                        <br></br>
                    <h6 className='text-end m-3 animate__animated animate__fadeInDownBig'> Francisca P, mamá de Amanda </h6>
                    <br></br>
                </div>
                <Carousel.Caption>
                {/* <h2>Opcional</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='equipoTo'>
                    <br></br><br></br>
                    <h5 className='w-75 m-auto animate__animated animate__fadeInDown'>"Mi experiencia con 'Rehabilita Santiago' ha sido 
                        increíble. Desde que mi hija comenzó la terapia de fonoaudiología, 
                        he notado una mejora significativa en la capacidad para 
                        comunicarse. El equipo de fonoaudiólogos es altamente 
                        profesional y comprensivo. Han trabajado con mi hijo de manera 
                        personalizada, y gracias a su dedicación, he mejorado su
                        confianza al hablar y expresarse. Estoy realmente 
                        agradecida por el apoyo que hemos recibido aquí."</h5>
                        <br></br>
                    <h6 className='text-end m-3 animate__animated animate__fadeInDownBig'> 𝙵𝚛𝚊𝚗𝚌𝚒𝚜𝚌𝚊 𝙿, 𝚖𝚊𝚖á 𝚍𝚎 𝙰𝚖𝚊𝚗𝚍𝚊 </h6>
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
