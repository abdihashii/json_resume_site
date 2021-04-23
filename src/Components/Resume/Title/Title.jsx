import React, { useContext } from 'react';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './title.scss';

const Title = () => {
  const { name, label } = useContext(ResumeContext);

  return (
    <div className="title">
      <h1 className="header-name">{name}'s's's</h1>
      <h3 className="header-label">{label}</h3>
    </div>
  );
};

export default Title;
