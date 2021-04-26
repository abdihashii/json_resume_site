import React from 'react';

// Internal components
import Navbar from './Navbar/Navbar';
import Resume from './Resume/Resume';

// Contexts
import { ResumeContextProvider } from '../Contexts/ResumeContext';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss';
import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <ResumeContextProvider>
      <Navbar />
      <Resume />
    </ResumeContextProvider>
  );
};

export default Home;
