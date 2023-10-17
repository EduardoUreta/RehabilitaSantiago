import Accordion from 'react-bootstrap/Accordion';
import { Link, NavLink } from 'react-router-dom'

export function Faqs() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" className='equipoKine'>
        <Accordion.Header><h1>1. ¿Qué servicios ofrece su centro de atención domiciliaria?</h1></Accordion.Header>
        <Accordion.Body className='equipoKine'>
            <h3>Ofrecemos una amplia gama de servicios de salud en el hogar, que incluyen kinesiología, 
            terapia ocupacional y fonoaudiología, adaptados tanto para adultos como para niños.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h1>2. ¿Cómo puedo solicitar una cita para recibir terapia a domicilio?</h1></Accordion.Header>
        <Accordion.Body className='equipoFono'>
            <h3>Puedes comunicarte con nosotros a través de WhatsApp o llenar nuestro formulario de contacto haciendo clic <button className='btn btn-outline-success '><NavLink to="/contacto" className='nav-link text-black text-center mr-2'>AQUÍ.</NavLink></button>
            <br></br>Recibiremos automáticamente tu solicitud y continuaremos la comunicación por medio de WhatsApp.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h1>3. ¿Necesito una derivación médica para acceder a sus servicios?</h1></Accordion.Header>
        <Accordion.Body className='equipoTo'>
            <h3>En principio, no se requiere una derivación médica para comenzar la terapia, aunque puede ser necesaria para el 
            reembolso de boletas a través de las isapres.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><h1>4. ¿Qué tipos de terapia ofrecen?</h1></Accordion.Header>
        <Accordion.Body className='direccion'>
            <h3>Puedes acceder a más detalles haciendo clic <button className='btn btn-outline-danger '><NavLink to="/servicios" className='nav-link text-black text-center mr-2'>aquí.</NavLink></button></h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><h1>5. ¿Cuánto duran las sesiones?</h1></Accordion.Header>
        <Accordion.Body className='equipoKine'>
            <h3>Las sesiones de evaluación tienen una duración de 45 a 60 minutos, mientras que las de intervención constan de 
            45 minutos de actividades con el usuario y 15 minutos adicionales para brindar retroalimentación y responder a 
            las preguntas de la familia.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><h1>6. ¿A qué población se dirigen sus servicios? ¿Atienden a niños, adultos o ambos?</h1></Accordion.Header>
        <Accordion.Body className='equipoFono'>
            <h3>Nuestros servicios están disponibles para toda la población, desde recién nacidos hasta adultos mayores.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><h1>7. ¿Puedo utilizar mi seguro complementario y/o mi isapre para el pago de las sesiones?</h1></Accordion.Header>
        <Accordion.Body className='equipoTo'>
            <h3>Sí, al finalizar cada sesión, se proporciona una boleta correspondiente a la atención brindada. 
            Esta boleta puede presentarse a su isapre o seguro complementario para solicitar el reembolso. 
            Generalmente, estas instituciones solicitan una derivación médica y un informe de evaluación. 
            El monto de reembolso varía según el plan de salud de cada paciente.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><h1>8. ¿En qué consiste la evaluación? ¿Entregan informe con los resultados?</h1></Accordion.Header>
        <Accordion.Body className='direccion'>
            <h3>Las sesiones de evaluación se dividen en dos partes: una entrevista inicial con el adulto a cargo del usuario 
            (generalmente padres en el caso de niños, el usuario mismo si es adulto o hijos en caso de adultos mayores) 
            y luego la evaluación propiamente tal. Después de un máximo de dos semanas a partir de la evaluación, 
            entregaremos un informe con los resultados y el diagnóstico.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><h1>9. ¿Cómo elijo al terapeuta adecuado para mi necesidad?</h1></Accordion.Header>
        <Accordion.Body className='equipoKine'>
            <h3>Para asignar al profesional adecuado, puedes proporcionarnos información detallada sobre el motivo de consulta, 
            incluyendo la edad del usuario, sus necesidades o inquietudes, diagnósticos previos, y si alguien recomendó buscar 
            apoyo profesional (como un médico tratante, profesores, otros profesionales de la salud, familiares, etc.).</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header><h1>10. ¿Cuáles son los beneficios de recibir terapia en casa en lugar de en una clínica, hospital o consulta?</h1></Accordion.Header>
        <Accordion.Body className='equipoFono'>
            <h3>La terapia en casa ofrece comodidad en un entorno familiar, lo que reduce el estrés y el riesgo de exposición a 
            enfermedades infecciosas. Además, permite la participación de la familia en el proceso de terapia, fomentando un 
            apoyo continuo y un ambiente más personalizado.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header><h1>11. ¿Cuáles son los horarios de atención y la disponibilidad de citas?</h1></Accordion.Header>
        <Accordion.Body className='equipoTo'>
            <h3>Nuestros servicios están disponibles de lunes a sábado, y los horarios se adaptan a la agenda de cada profesional. 
            Puedes indicarnos tus preferencias horarias para que podamos asignarte al terapeuta que mejor se ajuste a tus necesidades.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header><h1>12. ¿En qué comunas atienden?</h1></Accordion.Header>
        <Accordion.Body className='direccion'>
            <h3>Contamos con profesionales en todas las comunas de la Región Metropolitana. 
            Es importante tener en cuenta que en algunas comunas periféricas como las de la Provincia del Maipo, 
            Talagante, Chacabuco y Melipilla, la disponibilidad de profesionales puede ser más limitada.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header><h1>13. ¿Cómo se programan los pagos de las sesiones?</h1></Accordion.Header>
        <Accordion.Body className='equipoKine'>
            <h3>Los pagos deben realizarse previo a cada sesión, una vez confirmada esta. Puedes efectuar el pago por transferencia bancaria.</h3>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header><h1>14. ¿Cuál es su política de cancelación y reprogramación de citas?</h1></Accordion.Header>
        <Accordion.Body className='equipoFono'>
            <h3>Para cancelar o reprogramar una cita, solicitamos que lo hagas con al menos 24 horas de antelación, 
            a menos que se trate de una urgencia.</h3>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


{/* 1. ¿Qué servicios ofrece su centro de atención domiciliaria?
                Ofrecemos una amplia gama de servicios de salud en el hogar, que incluyen kinesiología, terapia ocupacional y fonoaudiología, adaptados tanto para adultos como para niños.

            2. ¿Cómo puedo solicitar una cita para recibir terapia a domicilio?
            Puedes comunicarte con nosotros a través de WhatsApp o llenar nuestro formulario de contacto haciendo clic [aquí](insertar link). Recibiremos automáticamente tu solicitud y continuaremos la comunicación por medio de WhatsApp.

            3. ¿Necesito una derivación médica para acceder a sus servicios?
            En principio, no se requiere una derivación médica para comenzar la terapia, aunque puede ser necesaria para el reembolso de boletas a través de las isapres.

            4. ¿Qué tipos de terapia ofrecen?
                En kinesiología, brindamos servicios que incluyen:
                    Neurorehabilitación
                    Rehabilitación músculo esquelética
                    Manejo respiratorio
                    Rehabilitación post COVID
                    Masoterapia
                    Atención a población infantil, adultos y adultos mayores. 
                En terapia ocupacional, ofrecemos:
                    Apoyo en salud mental y tratamientos psiquiátricos
                    Terapia para usuarios con diversas necesidades, como discapacidad intelectual, 
                    retrasos en el desarrollo infantil, TEA, TDAH, demencias, entre otros.
                En fonoaudiología, nuestros profesionales se especializan en:
                    Trastornos del lenguaje y habla, 
                    Trastornos de la deglución
                    Tartamudez
                    Rechazo alimentario
                    Estimulación temprana
                    Atención temprana
                    Neurorehabilitación
                    Rehabilitación de trastornos de la voz
                    Lavado de oídos.

            5. ¿Cuánto duran las sesiones?
            Las sesiones de evaluación tienen una duración de 45 a 60 minutos, mientras que las de intervención constan de 45 minutos de actividades con el usuario y 15 minutos adicionales para brindar retroalimentación y responder a las preguntas de la familia.

            6. ¿A qué población se dirigen sus servicios? ¿Atienden a niños, adultos o ambos?
            Nuestros servicios están disponibles para toda la población, desde recién nacidos hasta adultos mayores.

            7. ¿Puedo utilizar mi seguro complementario y/o mi isapre para el pago de las sesiones?
            Sí, al finalizar cada sesión, se proporciona una boleta correspondiente a la atención brindada. Esta boleta puede presentarse a su isapre o seguro complementario para solicitar el reembolso. Generalmente, estas instituciones solicitan una derivación médica y un informe de evaluación. El monto de reembolso varía según el plan de salud de cada paciente.

            8. ¿En qué consiste la evaluación? ¿Entregan informe con los resultados?
            Las sesiones de evaluación se dividen en dos partes: una entrevista inicial con el adulto a cargo del usuario (generalmente padres en el caso de niños, el usuario mismo si es adulto o hijos en caso de adultos mayores) y luego la evaluación propiamente tal. Después de un máximo de dos semanas a partir de la evaluación, entregaremos un informe con los resultados y el diagnóstico.

            9. ¿Cómo elijo al terapeuta adecuado para mi necesidad?
            Para asignar al profesional adecuado, puedes proporcionarnos información detallada sobre el motivo de consulta, incluyendo la edad del usuario, sus necesidades o inquietudes, diagnósticos previos, y si alguien recomendó buscar apoyo profesional (como un médico tratante, profesores, otros profesionales de la salud, familiares, etc.).

            10. ¿Cuáles son los beneficios de recibir terapia en casa en lugar de en una clínica, hospital o consulta?
            La terapia en casa ofrece comodidad en un entorno familiar, lo que reduce el estrés y el riesgo de exposición a enfermedades infecciosas. Además, permite la participación de la familia en el proceso de terapia, fomentando un apoyo continuo y un ambiente más personalizado.

            11. ¿Cuáles son los horarios de atención y la disponibilidad de citas?
            Nuestros servicios están disponibles de lunes a sábado, y los horarios se adaptan a la agenda de cada profesional. Puedes indicarnos tus preferencias horarias para que podamos asignarte al terapeuta que mejor se ajuste a tus necesidades.

            12. ¿En qué comunas atienden?
            Contamos con profesionales en todas las comunas de la Región Metropolitana. Es importante tener en cuenta que en algunas comunas periféricas como las de la Provincia del Maipo, Talagante, Chacabuco y Melipilla, la disponibilidad de profesionales puede ser más limitada.

            13. ¿Cómo se programan los pagos de las sesiones?
            Los pagos deben realizarse previo a cada sesión, una vez confirmada esta. Puedes efectuar el pago por transferencia bancaria.

            14. ¿Cuál es su política de cancelación y reprogramación de citas?
            Para cancelar o reprogramar una cita, solicitamos que lo hagas con al menos 24 horas de antelación, a menos que se trate de una urgencia. */}