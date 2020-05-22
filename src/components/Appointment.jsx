import React from 'react';

const Appointment = ({ appointment, deteleAppointment }) => {
  const { petName, ownerName, date, hour, symptoms } = appointment;
  return (
    <div className="cita">
      <p>
        Pet: <span>{petName}</span>
      </p>
      <p>
        Owner: <span>{ownerName}</span>
      </p>
      <p>
        Date: <span>{date}</span>
      </p>
      <p>
        Hour: <span>{hour}</span>
      </p>
      <p>
        Symptoms: <span>{symptoms}</span>
      </p>

      <button className="button eliminar u-full-width" onClick={() => deteleAppointment(appointment.id)}>
        Delete &times;
      </button>
    </div>
  );
};

export default Appointment;
