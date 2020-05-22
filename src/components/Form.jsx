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

  return (
    <Fragment>
      <h2>Create Appointment</h2>
      <form action="">
        <label htmlFor="petName">Pet Name</label>
        <input type="text" name="petName" className="u-full-width" placeholder="Pet Name" onChange={handleChange} />
        <label htmlFor="ownerName">Owner Name</label>
        <input type="text" name="ownerName" className="u-full-width" placeholder="Pet Owner's Name" onChange={handleChange} />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" className="u-full-width" onChange={handleChange} />
        <label htmlFor="hour">Hour</label>
        <input type="time" name="hour" className="u-full-width" onChange={handleChange} />
        <label htmlFor="symptoms">Symptoms</label>
        <textarea name="symptoms" className="u-full-width" onChange={handleChange}></textarea>

        <button type="button" className="u-full-width button-primary">
          Add Appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
