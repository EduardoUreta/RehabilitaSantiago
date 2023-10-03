import 'animate.css'
import CarruselSesiones from '../Components/CarruselSesiones.jsx'

export function Inicio() {
  return (
    <div>
      <h1>NUESTROS SERVICIOS</h1> <br></br>
      <div className='row m-auto'>
        <h2 className='col-md-4 col-lg-3 m-auto equipoFono border'>𝒻𝑜𝓃𝑜𝒶𝓊𝒹𝒾𝑜𝓁𝑜𝑔í𝒶</h2>
        <h2 className='col-md-4 col-lg-3 m-auto equipoKine border'>𝓀𝒾𝓃𝑒𝓈𝒾𝑜𝓁𝑜𝑔í𝒶</h2>
        <h2 className='col-md-4 col-lg-3 m-auto equipoTo border'>𝓉𝑒𝓇𝒶𝓅𝒾𝒶 𝑜𝒸𝓊𝓅𝒶𝒸𝒾𝑜𝓃𝒶𝓁</h2>
      </div>
      <hr />
      <div>
        <h2 className="animate__animated animate__heartBeat">¡Te damos la bienvenida a Rehabilita Santiago! </h2>
        <h2 className="animate__animated animate__backInUp">
          En esta página podrás saber más sobre nosotros, conocer al equipo, agendar horas de
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
