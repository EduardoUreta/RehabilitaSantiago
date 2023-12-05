import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import { Equipo } from './Components/Equipo';
import { Servicios } from './Components/Servicios';
import { Nosotros } from './Components/Nosotros';
import { CarouselComponent } from './Components/Galeria';
import Footer from './Components/Footer';
import { BlogRecursos } from './Components/BlogRecursos';
import { Contacto } from './Components/Contacto';
import { Testimonios } from './Components/Testimonios';
import { Faqs } from './Components/About';
import { Error404 } from './Components/Error404';
import WhatsAppButton from './Components/WhatsAppButton';

import 'animate.css';


function App() {
  const [count, setCount] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavBar/>}/>
        </Routes> 

          <hr/>
          <h1 className='animate__animated animate__fadeInDown'>REHABILITA SANTIAGO</h1>

          <Routes>
            <Route path="/equipo" element={<Equipo/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path='/galeria' element={<CarouselComponent/>}/>
            <Route path='/faqs' element={<Faqs/>}/>
            <Route path='/blog-y-recursos' element={<BlogRecursos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/' element={<Testimonios/>}/>
            <Route path="*" element={<Error404/>}></Route>
          </Routes>
          <hr/>

          <Footer/>
          <WhatsAppButton/>
          <button id="scroll-to-top" onClick={scrollToTop} className='btn btn-danger '>Subir al inicio</button>
      </BrowserRouter>

  )
}

export default App
