// import React from 'react';
// import propTypes from 'prop-types';
// import clsx from 'clsx';

// function Status(props) {
//   const { statusOnline } = props;
//   const statusClass = clsx('status', { 'bg-green': statusOnline, 'bg-red': !statusOnline });

//   return (
//     <span className={statusClass}>{statusOnline ? 'Online' : 'Offline'}</span>
//   );
// }

// Status.propTypes = {
//   statusOnline: propTypes.bool.isRequired,
// };

// export default Status;


import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';


function Status(props) {
  const { statusIsOnline } = props;
  //Проба застосувати clsx
  const statusClass = clsx("status", statusIsOnline ? 'statuson' : 'statusoff');

  return (
    <span className={statusClass}>{statusIsOnline ? '' : ''}</span>
  );
}

Status.propTypes = {
  
  statusIsOnline: propTypes.bool,

};

export default Status;
