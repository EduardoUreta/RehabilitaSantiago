import fonoaudiologia from '../assets/servicios/fonoaudiologia.png';
import 'animate.css';

export function Servicios () {
    return (
        <div className="bg-light row row-gap-3 ">
            <h2 className='animate__animated animate__shakeX'>Atención Fonoaudiológica</h2>
            <div className='container col-sm-12 col-md-6 col-lg-6'>
                <img src={fonoaudiologia} className="img-fluid img-thumbnail" alt="servicioFono"/>
            </div>
            <div className='container col-sm-6 col-md-6 col-lg-6'>
                <p>Evaluación, diagnóstico y tratamiento de:</p>
                <div className="container">
                    <ul className="two-column-list">
                        <li>Trastornos del Lenguaje</li>
                        <li>Trastornos del Habla</li>
                        <li>Trastornos del Deglución</li>
                        <li>Tartamudez</li>
                        <li>Rechazo alimentario</li>
                        <li>Dificultades alimentarias</li>
                        <li>Estimulación temprana</li>
                        <li>Atención temprana</li>
                        <li>Lactancia materna</li>
                        <li>Baby Led Weaning</li>
                    </ul>
                    <button className='button-leer-mas'> 
                        Leer Más
                    </button>
                </div>
            </div>
            <hr/>
            <h2 className='animate__animated animate__shakeX'>Atención Kinesiológica</h2>
            <div className='container col-sm-12 col-md-6 col-lg-6'>
                <img src={fonoaudiologia} className="img-fluid img-thumbnail" alt="servicioFono"/>
            </div>
            <div className='container col-sm-6 col-md-6 col-lg-6'>
                <p>Evaluación, diagnóstico y tratamiento de:</p>
                <div className="container">
                    <ul className="two-column-list">
                        <li>Trastornos del Lenguaje</li>
                        <li>Trastornos del Habla</li>
                        <li>Trastornos del Deglución</li>
                        <li>Tartamudez</li>
                        <li>Rechazo alimentario</li>
                        <li>Dificultades alimentarias</li>
                        <li>Estimulación temprana</li>
                        <li>Atención temprana</li>
                        <li>Lactancia materna</li>
                        <li>Baby Led Weaning</li>
                    </ul>
                    <button className='button-leer-mas'> 
                        Leer Más
                    </button>
                </div>
            </div>
            <hr/>
            <h2 className='animate__animated animate__shakeX'>Atención Terapia Ocupacional</h2>
            <div className='container col-sm-12 col-md-6 col-lg-6'>
                <img src={fonoaudiologia} className="img-fluid img-thumbnail" alt="servicioFono"/>
            </div>
            <div className='container col-sm-6 col-md-6 col-lg-6'>
                <p>Evaluación, diagnóstico y tratamiento de trastornos del lenguaje, habla, tartamudez, deglución. </p>
                    <ul>
                        <li>Rechazo alimentario</li>
                        <li>Dificultades alimentarias</li>
                        <li>Estimulación temprana</li>
                        <li>Atención temprana</li>
                        <li>Lactancia materna</li>
                        <li>Baby Led Weaning</li>
                    </ul>
                    <button className='button-leer-mas'> 
                        Leer Más
                    </button>
            </div>
        </div>
    )
}
