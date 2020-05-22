import React, { Fragment, useState } from 'react';

const Form = () => {
  // Crear State de Citas
  const [appointment, updateAppointment] = useState({
    petName: '',
    ownerName: '',
    date: '',
    hour: '',
    symptoms: '',
  });

  // Función que se ejecuta cuando el usuario escribe en un input
  const handleChange = (event) => {
    updateAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  // Extraer los valores
  const { petName, ownerName, date, hour, symptoms } = appointment;

  return (
    <Fragment>
      <h2>Create Appointment</h2>
      <form action="">
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

        <button type="button" className="u-full-width button-primary">
          Add Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
