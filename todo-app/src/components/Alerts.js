import React from 'react';
import Alert from './Alert';

const Alerts = (props) => {
  let { alerts } = props;

  return (
    <div>
      {alerts.map((alert) => (
        <Alert message={alert.message} name={alert.name} />
      ))}
    </div>
  );
};

export default Alerts;
