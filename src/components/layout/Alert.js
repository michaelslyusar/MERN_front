import React from 'react';
import { useSelector } from 'react-redux';


const Alert = () => {
  
  const alerts = useSelector((state) => state.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => {
      
      return (
        <div
          key={alert.payload.id}
          className={`alert alert-${alert.payload.alertType}`}
        >
          {alert.payload.msg}
        </div>
      );
    })
  );
};

export default Alert;
