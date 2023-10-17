import 'animate.css';
import { Link, NavLink } from 'react-router-dom'

export function Nosotros() {
    return (
        <div className="bg-light animate__animated animate__backInUp">
            <h1>¿Quiénes somos?</h1>
            <h4>Somos un grupo de profesionales de salud conformado por fonoaudiólogos, terapeutas ocupacionales y kinesiólogos 
                dedicados a la evaluación e intervención de diversos diagnósticos en población infanto-juvenil y adulta.</h4>
                <br></br>
            <h1>¿Cómo nace Rehabilita Santiago?</h1>
            <h4>A través de la motivación de las fonoaudiólogas María Paz Ruiseñor y Catalina Aldana de poder entregar un servicio de 
                calidad en la comodidad del domicilio de cada usuario a lo largo de toda la Región Metropolitana con profesionales 
                actualizados en las distintas áreas de intervención existentes. Un servicio que tenga como prioridad la transparencia, 
                comunicación y vínculo entre la tríada terapeuta-paciente-familia.</h4>
                <br></br>
            <h1>¿Cuál es nuestro sello?</h1>
            <h4>
                Brindar un apoyo individualizado para cada usuario y su familia <br></br>
                Transparencia a lo largo de todo el proceso terapéutico, avances, derivaciones y reevaluaciones <br></br>
                Contar con profesionales que priorizan el vínculo terapéutico <br></br>
                Comunicación constante y cercanía con la familia de cada usuario <br></br>
            </h4>
                <br></br>
            <h1>¿Quiénes componen nuestro equipo?</h1>
            <h4>Equipo de terapeutas capacitados en diferentes áreas <br></br>
                Profesionales actualizados en sus áreas de intervención</h4>
                <button className='button-leer-mas'> 
                    <a href="/equipo" className='text-light'>¡Conoce al equipo!</a>
                </button>
        </div>
    )
}