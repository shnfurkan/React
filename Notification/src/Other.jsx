import React from 'react';
import Notification, { showNotification } from './Notification';

function Other() {

  return (
    <div>
      <Notification />
      <button onClick={() => showNotification('info',"Bilgilendirme","Bilgi",3000,)}>Show Info Notification</button>

    </div>
  );
}
export default Other;
