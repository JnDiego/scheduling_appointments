import React from 'react';
import PropTypes from 'prop-types';

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

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deteleAppointment: PropTypes.func.isRequired,
};

export default Appointment;
