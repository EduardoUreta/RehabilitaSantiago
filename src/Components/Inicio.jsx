import 'animate.css'
import CarruselSesiones from '../Components/CarruselSesiones.jsx'

export function Inicio() {
  return (
    <div>
      <h1>NUESTROS SERVICIOS</h1> <br></br>
      <div className='row m-auto'>
        <h2 className='col-md-4 col-lg-3 m-auto equipoFono border'>F𝚘𝚗𝚘𝚊𝚞𝚍𝚒𝚘𝚕𝚘𝚐í𝚊</h2>
        <h2 className='col-md-4 col-lg-3 m-auto equipoKine border'>K𝚒𝚗𝚎𝚜𝚒𝚘𝚕𝚘𝚐í𝚊</h2>
        <h2 className='col-md-4 col-lg-3 m-auto equipoTo border'>T𝚎𝚛𝚊𝚙𝚒𝚊 O𝚌𝚞𝚙𝚊𝚌𝚒𝚘𝚗𝚊𝚕</h2>
      </div>
      <hr />
      <div>
        <h2><b>¡Te damos la bienvenida a Rehabilita Santiago!</b></h2>
        <h2 className="">
          Aquí podrás saber más sobre nosotros, conocer al equipo, agendar horas de
          evaluación y terapia, contestar tus preguntas y acceder a nuestro blog
          con entretenida información.
        </h2>
      </div>
      <hr/>
      <div>
        <h1>NUESTRO TRABAJO</h1>
        <CarruselSesiones></CarruselSesiones>
    </div>
    </div>
  );
}
