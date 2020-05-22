import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  // Arreglo de citas
  const [appointments, saveAppointments] = useState([]);

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

  return (
    <Fragment>
      <h1>Patient Management</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>Manage your appointments</h2>
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
