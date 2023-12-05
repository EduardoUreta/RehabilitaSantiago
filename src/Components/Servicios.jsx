import fonoaudiologia from '../assets/servicios/fonoaudiologia.png';
import servFono1 from '../assets/servicios/servFono1.png'
import servFono2 from '../assets/servicios/servFono2.png'
import servFono3 from '../assets/servicios/servFono3.png'
import 'animate.css';

export function Servicios () {
    return (
        <div className="bg-light row row-gap-3 ">
            <h2 className='animate__animated animate__shakeX'>Atención Fonoaudiológica</h2>
            <div className='container col-sm-12 col-md-6 col-lg-6'>
                <img src={servFono3} className="img-fluid img-thumbnail " alt="servicioFono"/>
            </div>
            <div className='container col-sm-6 col-md-6 col-lg-6'>
                <p>Evaluación, diagnóstico y tratamiento de:</p>
                <div className="container">
                    <ul className="two-column-list text-capitalize equipoFono m-auto p-3">
                        <li>Trastornos del Lenguaje</li>
                        <li>Trastornos del Habla</li>
                        <li>Trastornos del Deglución</li>
                        <li>Tartamudez</li>
                        <li>Rechazo Alimentario</li>
                        <li>Dificultades Alimentarias</li>
                        <li>Estimulación Temprana</li>
                        <li>Atención Temprana</li>
                        <li>Lactancia Materna</li>
                        <li>Baby Led Weaning</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <h2 className='animate__animated animate__shakeX'>Atención Kinesiológica</h2>
            <div className='container col-sm-12 col-md-6 col-lg-6'>
                <img src={servFono1} className="img-fluid img-thumbnail" alt="servicioFono"/>
            </div>
            <div className='container col-sm-6 col-md-6 col-lg-6'>
                <p>Evaluación, diagnóstico y tratamiento de:</p>
                <div className="container">
                    <ul className="text-capitalize equipoKine p-4">
                        <li>Neurorehabilitación</li>
                        <li>Rehabilitación Músculo Esquelética</li>
                        <li>Manejo Respiratorio</li>
                        <li>Rehabilitación Post COVID</li>
                        <li>Masoterapia</li>
                        <li>Atención a Población Infantil, Adultos y Adultos Mayores.</li>                 
                    </ul>
                </div>
            </div>
            <hr/>
            <h2 className='animate__animated animate__shakeX'>Atención Terapia Ocupacional</h2>
            <div className='container col-sm-12 col-md-6 col-lg-6'>
                <img src={servFono2} className="img-fluid img-thumbnail" alt="servicioFono"/>
            </div>
            <div className='container col-sm-6 col-md-6 col-lg-6 justify-content-center '>
                <p>Evaluación, diagnóstico y tratamiento en: </p>
                    <ul className='equipoTo p-4'>
                        <li>Apoyo en Salud Mental y Tratamientos Psiquiátricos</li>
                        <li>Terapia para Usuarios con Diversas Necesidades: </li>
                        <li>Discapacidad Intelectual</li>
                        <li>TEA, TDAH</li>
                        <li>Demencias, entre otros</li>
                    </ul>
            </div>
        </div>
    )
}
