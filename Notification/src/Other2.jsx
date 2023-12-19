import React from 'react';
import Notification, { showNotification } from './Notification';

function Other() {

  return (
    <div>
      <Notification />
      <button onClick={() => showNotification('success',"Bagaj Oluşturuldu.","Bagaj Kontrol",4000,)}>Show Success Notification</button>

    </div>
  );
}
export default Other;
