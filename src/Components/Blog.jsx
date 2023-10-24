import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import procesoterapiafono from '../assets/blogrecursos/procesoterapiafono.png';
import derivacion from '../assets/blogrecursos/derivacion.png';
import derivacionTO from '../assets/blogrecursos/derivacionTO.png';
import consecuencias from '../assets/blogrecursos/consecuencias.png';
import { Link } from 'react-router-dom';


export function Blog() {
  return (
    <Row xs={1} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Row>
              <Col md={6}>
                <Card.Img variant="top" src={idx === 0 ? procesoterapiafono : derivacion} />
              </Col>
              <Col md={6} className='d-flex align-items-center'>
                <Card.Body>
                  <Card.Title className='text-danger'>{idx === 0 ? 'PROCESO DE TERAPIA FONOAUDIOLÓGICA' : 'DERIVACIÓN DEL JARDÍN/COLEGIO A FONOAUDIOLOGÍA'}</Card.Title>
                  <Card.Text>
                    {idx === 0 ? (
                      <>
                        Nada más real que esta montaña rusa en la terapia fonoaudiológica con usuarios infantiles! 🎢
                        Pero como sabemos es un proceso 👏🏻 el cual toma su tiempo, a veces es más lento, 
                        otras veces más rápido, depende también de la continuidad de las 
                        sesiones y del compromiso con el cumplimiento de las tareitas 
                        que se van dejando para la casa, del vínculo terapéutico y 
                        un sin fin de cosas 🤪! 
                        Pero al final el resultado es maravilloso 💥
                        <br></br>
                        <br></br>
                      </>
                    ) : (
                      <>
                        Hace un mes que inició el año escolar 📚 y 
                        con esto comienzan las derivaciones a diferentes 
                        profesionales! En este post te contamos que hacer 
                        si tu hijo o hija es derivado a terapia fonoaudiológica 🤩👏🏻
                      </>
                    )}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Row>
              <Col md={6}>
                <Card.Img variant="top" src={idx === 0 ? derivacionTO : consecuencias} />
              </Col>
              <Col md={6} className='d-flex align-items-center '>
                <Card.Body>
                  <Card.Title className='text-danger'>{idx === 0 ? '¿POR QUÉ DERIVAMOS A TERAPIA OCUPACIONAL?' : '¿QUÉ PASA CUANDO NO SOMOS CONSTANTE CON LA ASISTENCIA?'}</Card.Title>
                  <Card.Text>
                    {idx === 0 ? (
                      <>
                        Podemos sugerir una evaluación de terapia ocupacional (T.O), los cuales pueden trabajar en las siguientes áreas:<br></br>
 
                        - Modificación del Entorno: Modificamos el entorno del niño/a para que sea más accesible y adecuado
                            a sus necesidades, lo que puede reducir el estres y la frustración, y mejorar su comportamiento.<br></br>

                        -Evaluamos habilitades en áreas de coordinación, equilibrio, planificación y atención
                            para identificar se puede mejorar. <br></br>

                        -Terapia Sensorial: Ayuda regular emociones y comportamiento al mejorar su capacidad 
                            para procesar la información sensorial de su entorno.<br></br><br></br>

                        ¡y muchas mas!<br></br><br></br>

                      </>
                    ) : (
                      <>
                        Que importante es la continuidad en las terapias en salud 👏🏻 
                        ser constantes ayuda a cumplir los objetivos planteados en ciertos 
                        periodos de tiempo, entre otras cosas!
                        <br></br><br></br>

                      </>
                    )}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
    
  );
}
