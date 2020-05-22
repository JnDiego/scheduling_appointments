import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Form = ({ createAppointment }) => {
  // Crear State de Citas
  const [appointment, updateAppointment] = useState({
    petName: '',
    ownerName: '',
    date: '',
    hour: '',
    symptoms: '',
  });

  // State de errores
  const [error, setError] = useState(false);

  // Función que se ejecuta cuando el usuario escribe en un input
  const handleChange = (event) => {
    updateAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  // Extraer los valores
  const { petName, ownerName, date, hour, symptoms } = appointment;

  // Cuando el usuario envía el formulario
  const submitAppointment = (event) => {
    event.preventDefault();

    // Validar
    if (petName.trim() === '' || ownerName.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
      setError(true);
      console.error('Sorry, there was an error in the form.');
      return;
    }

    // Eliminar mensaje de error previo
    setError(false);

    // Asignar ID
    appointment.id = uuid();

    // Crear la cita en el state principal
    createAppointment(appointment);

    // Reiniciar el form
    updateAppointment({ petName: '', ownerName: '', date: '', hour: '', symptoms: '' });
  };

  return (
    <Fragment>
      <h2>Create Appointment</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios.</p> : null}
      <form onSubmit={submitAppointment}>
        <label htmlFor="petName">Pet Name</label>
        <input type="text" name="petName" className="u-full-width" placeholder="Pet Name" onChange={handleChange} value={petName} />
        <label htmlFor="ownerName">Owner Name</label>
        <input
          type="text"
          name="ownerName"
          className="u-full-width"
          placeholder="Pet Owner's Name"
          onChange={handleChange}
          value={ownerName}
        />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" className="u-full-width" onChange={handleChange} value={date} />
        <label htmlFor="hour">Hour</label>
        <input type="time" name="hour" className="u-full-width" onChange={handleChange} value={hour} />
        <label htmlFor="symptoms">Symptoms</label>
        <textarea name="symptoms" className="u-full-width" onChange={handleChange} value={symptoms}></textarea>

        <button type="submit" className="u-full-width button-primary">
          Add Appointment
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired,
};

export default Form;
