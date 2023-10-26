import React from 'react';
import { Carousel } from 'react-bootstrap';
import foto2 from '../assets/galeria/foto2.jpg';
import foto3 from '../assets/galeria/foto3.jpg';

export function CarouselComponent() {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-50 img-fluid m-auto"
                src={foto2}
                alt="Primera imagen"
                />
                <Carousel.Caption>
                {/* <h2>Encuentra las mejores carnes</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50 img-fluid m-auto"
                src={foto3}
                alt="Primera imagen"
                />
                <Carousel.Caption>
                {/* <h2>Encuentra las mejores carnes</h2> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}