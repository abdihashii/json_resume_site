import React from 'react';

// Components
import Resume from './Resume/Resume';

// Contexts
import { ResumeContextProvider } from '../Contexts/ResumeContext';

// CSS
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <ResumeContextProvider>
        <Resume />
      </ResumeContextProvider>
    </div>
  );
};

export default Home;
