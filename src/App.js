import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  // Citas en local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // Arreglo de citas
  const [appointments, saveAppointments] = useState(initialAppointments);

  // Use Effect para realizar operaciones cuando el state cambia
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments, initialAppointments]);

  // Función que tome las citas actuales y agregue la nueva
  const createAppointment = (appointment) => {
    saveAppointments([...appointments, appointment]);
  };

  // Funcion que elimina una cita por su ID
  const deteleAppointment = (id) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id);
    saveAppointments(newAppointments);
  };

  // Mensaje condicional
  const title = appointments.length === 0 ? 'There are no appointments' : 'Manage your appointments';

  return (
    <Fragment>
      <h1>Patient Management</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment key={appointment.id} appointment={appointment} deteleAppointment={deteleAppointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
