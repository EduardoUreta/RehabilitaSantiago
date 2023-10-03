import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export const Contacto = () => {
    const [messageSent, setMessageSent] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        namePacient: '',
        agePacient: '',
        comuna: '',
        phoneNumber: '',
        attention: '',
        message: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Su nombre es requerido'),
        namePacient: Yup.string().required('El nombre del paciente es requerido'),
        agePacient: Yup.string().required('La edad del paciente es requerido'),
        comuna: Yup.string().required('La edad del paciente es requerido'),
        attention: Yup.string().required('Debes escoger alguna atención'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);

        const phoneNumber = '56948538803';
        const message = `Hola, quiero contactarte acerca de: ${values.attention} \n- Mi nombre es ${values.name} y mi correo es ${values.email} \n- El paciente se llama ${values.namePacient} y tiene ${values.agePacient} años \n- Vivo en la comuna de ${values.comuna} \n- Te detallo lo siguiente: ${values.message}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, '_blank');

        setMessageSent(true);
    };

    return (
        <div className="container equipoFono">
            <h2 className="text-center">¡CONTÁCTANOS!</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className='w-75 m-auto'>
                        <div className="form-group equipoKine">
                            <label htmlFor="name">Nombre y Apellido Apoderado</label>
                            <Field type="text" name="name" className="form-control" placeholder="Ingresa tu nombre"/>
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="form-group equipoKine">
                            <label htmlFor="email">Correo Electrónico</label>
                            <Field type="email" name="email" className="form-control" placeholder="Ingresa tu correo"/>
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="form-group equipoKine">
                            <label htmlFor="namePacient">Nombre y Apellido Paciente</label>
                            <Field type="text" name="namePacient" className="form-control" placeholder="Ingresa nombre del paciente"/>
                            <ErrorMessage name="namePacient" component="div" className="text-danger" />
                        </div>
                        <div className="form-group equipoTo">
                            <label htmlFor="agePacient">Edad Paciente</label>
                            <Field type="text" name="agePacient" className="form-control" placeholder="Ingresa la edad del paciente"/>
                            <ErrorMessage name="agePacient" component="div" className="text-danger" />
                        </div>
                        <div className="form-group equipoTo">
                            <label htmlFor="phoneNumber">Número de Teléfono</label>
                            <Field type="tel" name="phoneNumber" className="form-control" placeholder="Ingresa número de teléfono" />
                            <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                        </div>
                        <div className="form-group equipoTo">
                            <label htmlFor="comuna">Comuna</label>
                            <Field type="text" name="comuna" className="form-control" placeholder="Ingresa tu comuna de residencia"/>
                            <ErrorMessage name="comuna" component="div" className="text-danger" />
                        </div>
                        <div className="form-group direccion">
                            <label htmlFor="attention">Atención a Solicitar</label>
                            <Field as="select" name="attention" className="form-control">
                                <option value="" disabled>
                                Selecciona una atención
                                </option>
                                <option value="Fonoaudiología" className='text-center'>Fonoaudiología</option>
                                <option value="Terapia Ocupacional" className='text-center'>Terapia Ocupacional</option>
                                <option value="Kinesiología" className='text-center'>Kinesiología</option>
                                <option value="Dudas o consulta" className='text-center'>Dudas o consulta</option>
                            </Field>
                            <ErrorMessage name="attention" component="div" className="text-danger" />
                        </div>
                        <div className="form-group direccion">
                            <label htmlFor="message">Mensaje</label>
                            <Field as="textarea" name="message" className="form-control" rows="4" />
                            <ErrorMessage name="message" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                            Enviar
                        </button>
                        <br></br>
                        <br></br>
                    </Form>
                )}
            </Formik>
            {messageSent ? (
                <div className="alert alert-success mt-3" role="alert">
                    ¡Tu mensaje ha sido enviado exitosamente! <br></br> Te responderemos a la brevedad
                </div>
            ) : null}
        </div>
    )
}
