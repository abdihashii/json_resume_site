import React, { createContext } from 'react';

// Data
import resume_json from '../data/resume.json';

export const ResumeContext = createContext();

export const ResumeContextProvider = ({ children }) => {
  const { basics, experiences, skills, projects } = resume_json;

  const { name, label, email, phone, website, area } = basics;

  return (
    <ResumeContext.Provider
      value={{
        name,
        label,
        email,
        phone,
        website,
        area,
        experiences,
        skills,
        projects,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
