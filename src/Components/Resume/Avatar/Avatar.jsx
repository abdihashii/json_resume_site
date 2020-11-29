import React from 'react';

// CSS
import './avatar.scss';

// Images
import abdirahman from '../../../img/haji_yosemite.png';

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={abdirahman} alt="it me" />
    </div>
  );
};

export default Avatar;
